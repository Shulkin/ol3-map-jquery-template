define([
  "jquery",
  "backbone",
  "underscore",
  // global jquery functions
  "global",
  // nested views
  "views/home/map/map-view", // openlayers3 map
  "views/home/sidebars/sidebar-left/sidebar-left-view", // left sidebar
  "views/home/sidebars/sidebar-right/sidebar-right-view", // right sidebar
  // path to home html templates
  "text!templates/home/home.html"
], function($, Backbone, _, Global, Map, LeftSidebar, RightSidebar, HomeTemplate) {
  return Backbone.View.extend({
    el: $("#home"), // div container
    events: {
      "click .mini-submenu-left": "onMiniSubmenuLeftClick",
      "click .mini-submenu-right": "onMiniSubmenuRightClick",
    },
    initialize: function() {
      // init openlayers3 map
      var map = new Map();
      // render on create
      this.render();
      // actually create map
      map.create();
      // show sidebars by default
      Global.applyInitial();
      // attach window resize event handler
      Global.onWindowResize();
      // trigger resize event to update all scrollbars
      Global.fireWindowResizeEvent(); // also, call applyMargins
    },
    render: function() {
      // compile template
      var compiledTemplate = _.template(HomeTemplate);
      this.$el.html(compiledTemplate);
      // append nested views
      this.$("#sidebar-left").html(new LeftSidebar().$el);
      this.$("#sidebar-right").html(new RightSidebar().$el);
    },
    // click on left sidebar minimized icon
    onMiniSubmenuLeftClick: function() {
      var self = this;
      // hide icon
      $(".mini-submenu-left").fadeOut(function() {
        // show sidebar
        $(".sidebar-left .sidebar-body").fadeIn(
          "slide", function() {
            Global.applyMargins();
            // update scrollbars on nested panels
            self.$("#sidebar-left .panel-body").perfectScrollbar("update");
          }
        );
      });
    },
    // click on right sidebar minimized icon
    onMiniSubmenuRightClick: function() {
      // hide icon
      $(".mini-submenu-right").fadeOut(function() {
        // show sidebar
        $(".sidebar-right .sidebar-body").fadeIn(
          "slide", function() {
            Global.applyMargins();
            // update scrollbars on nested panels
            self.$("#sidebar-right .panel-body").perfectScrollbar("update");
          }
        );
      });
    }
  });
});
