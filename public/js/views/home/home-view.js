define([
  "jquery",
  "backbone",
  "underscore",
  // nested views
  "views/map/map-view", // openlayers3 map
  "views/sidebars/sidebar-left/sidebar-left-view", // left sidebar
  "views/sidebars/sidebar-right/sidebar-right-view" // right sidebar
  // path to home html templates
  "text!templates/home/home.html"
], function($, Backbone, _, Map, LeftSidebar, RightSidebar, HomeTemplate) {
  return Backbone.View.extend({
    initialize: function() {
      // render on create
      this.render();
    }
  });
});
