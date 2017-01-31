define([
  "jquery",
  "backbone",
  "underscore",
  // nested views
  "views/layers-list-view",
  "views/properties-view",
  // path to left sidebar html template
  "text!templates/sidebar-left.html"
], function($, Backbone, _, LayersList, Properties, LeftSidebarTemplate) {
  return Backbone.View.extend({
    el: $("#sidebar-left"),
    events: {
      "click .slide-submenu": "onSlideClick"
    },
    initialize: function(options) {
      // save callback
      this.collapseCallback = options.onCollapse;
      // render on create
      this.render();
    },
    render: function() {
      var compiledTemplate = _.template(LeftSidebarTemplate);
      this.$el.html(compiledTemplate);
      // append nested views
      this.$("#layers-panel").html(new LayersList().$el);
      this.$("#properties-panel").html(new Properties().$el);
    },
    onSlideClick: function() {
      // hide left sidebar
      var self = this;
      // only sidebar-body of left sidebar handle this click
      this.$(".sidebar-body").fadeOut("slide", function() {
        // show minimized icon
        $(".mini-submenu-left").fadeIn();
        // recalculate margins
        self.collapseCallback();
      });
    }
  });
});
