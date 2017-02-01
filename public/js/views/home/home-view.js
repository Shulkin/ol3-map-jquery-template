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
      "click .mini-submenu-right": "onMiniSubmenuRightClick"
    },
    initialize: function() {
      // render on create
      this.render();
      // create openlayers3 map
      var map = new Map();
      // create additional event handlers
      Global.createHandlers();
      // show sidebars by default
      Global.applyInitialUIState();
      Global.applyMargins();
    },
    render: function() {
      // compile template
      var compiledTemplate = _.template(HomeTemplate);
      this.$el.html(compiledTemplate);
      // append nested views
      this.$("#sidebar-left").html(new LeftSidebar({
        onCollapse: Global.applyMargins
      }).$el);
      this.$("#sidebar-right").html(new RightSidebar({
        onCollapse: Global.applyMargins
      }).$el);
    },
    // click on left sidebar minimized icon
    onMiniSubmenuLeftClick: function() {
      // hide icon
      $(".mini-submenu-left").fadeOut(function() {
        // show sidebar
        $(".sidebar-left .sidebar-body").fadeIn("slide", Global.applyMargins);
      });
    },
    // click on right sidebar minimized icon
    onMiniSubmenuRightClick: function() {
      // hide icon
      $(".mini-submenu-right").fadeOut(function() {
        // show sidebar
        $(".sidebar-right .sidebar-body").fadeIn("slide", Global.applyMargins);
      });
    }
  });
});
