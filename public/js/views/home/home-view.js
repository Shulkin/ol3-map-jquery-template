define([
  "jquery",
  "backbone",
  "underscore",
  // nested views
  "views/home/map/map-view", // openlayers3 map
  "views/home/sidebars/sidebar-left/sidebar-left-view", // left sidebar
  "views/home/sidebars/sidebar-right/sidebar-right-view", // right sidebar
  // path to home html templates
  "text!templates/home/home.html"
], function($, Backbone, _, Map, LeftSidebar, RightSidebar, HomeTemplate) {
  return Backbone.View.extend({
    el: $("#home"), // div container
    events: {
      "click .mini-submenu-left": "onMiniSubmenuLeftClick",
      "click .mini-submenu-right": "onMiniSubmenuRightClick"
    },
    isConstrained: function() {
      return $("div.middle").width() == $(window).width();
    },
    applyInitialUIState: function() {
      // on initial application state
      if (this.isConstrained()) {
        // show sidebars
        $(".sidebar-left .sidebar-body").fadeOut("slide");
        $(".sidebar-right .sidebar-body").fadeOut("slide");
        // hide minimized icons
        $(".mini-submenu-left").fadeIn();
        $(".mini-submenu-right").fadeIn();
      }
    },
    applyMargins: function() {
      // ol-zoom near left sidebar
      if ($(".mini-submenu-left").is(":visible")) {
        $("#map .ol-zoom") // sidebar closed
          .css("margin-left", 0) // 0px from left
          // navbar height can vary
          .css("margin-top", $(".navbar").height())
          // 0.4em from bottom of mini-icon
          .css("margin-top", "-=10px").css("margin-top", "+=.4em");
      } else {
        $("#map .ol-zoom") // sidebar opened
          // 0.4em from right corner of left sidebar
          .css("margin-left", $(".sidebar-left").width()).css("margin-left", "+=.4em")
          .css("margin-top", $(".navbar").height()).css("margin-top", "-=50px");
      }
      // ol-rotate near right sidebar
      if ($(".mini-submenu-right").is(":visible")) {
        $("#map .ol-rotate")
          .css("margin-right", 0) // 0px from right
          .css("margin-top", $(".navbar").height())
          // 0.4em from bottom of mini-icon
          .css("margin-top", "-=10px").css("margin-top", "+=.4em");
      } else {
        $("#map .ol-rotate")
          // 0.4em from left corner of right sidebar
          .css("margin-right", $(".sidebar-right").width()).css("margin-right", "+=.4em")
          .css("margin-top", $(".navbar").height()).css("margin-top", "-=50px");
      }
      // set offset margin depending on navbar height
      $(".navbar-offset").css("margin-top", $(".navbar").height());
    },
    createHandlers: function() {
      // on collapse content in sidebar panel
      $(".panel-collapse").on("hidden.bs.collapse", this.applyMargins);
      // on expand content in sidebar panel
      $(".panel-collapse").on("shown.bs.collapse", this.applyMargins);
      // calculate margins for openlayers3 controls on window resize
      $(window).on("resize", this.applyMargins);
    },
    initialize: function() {
      // render on create
      this.render();
      // create openlayers3 map
      var map = new Map();
      // set initial state
      this.applyInitialUIState();
      // set additional event handlers
      this.createHandlers();
    },
    render: function() {
      // compile template
      var compiledTemplate = _.template(HomeTemplate);
      this.$el.html(compiledTemplate);
      // append nested views
      this.$("#sidebar-left").html(new LeftSidebar({
        onCollapse: this.applyMargins
      }).$el);
      this.$("#sidebar-right").html(new RightSidebar({
        onCollapse: this.applyMargins
      }).$el);
    },
    // click on left sidebar minimized icon
    onMiniSubmenuLeftClick: function() {
      // hide icon
      $(".mini-submenu-left").fadeOut(function() {
        // show sidebar
        $(".sidebar-left .sidebar-body").fadeIn("slide", this.applyMargins);
      });
    },
    // click on right sidebar minimized icon
    onMiniSubmenuRightClick: function() {
      // hide icon
      $(".mini-submenu-right").fadeOut(function() {
        // show sidebar
        $(".sidebar-right .sidebar-body").fadeIn("slide", this.applyMargins);
      });
    }
  });
});
