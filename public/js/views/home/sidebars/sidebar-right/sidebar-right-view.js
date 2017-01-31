define([
  "jquery",
  "backbone",
  "underscore",
  // nested panels
  "views/tasks-view",
  // path to left sidebar html template
  "text!templates/sidebar-right.html"
], function($, Backbone, _, Tasks, RightSidebarTemplate) {
  return Backbone.View.extend({
    el: $("#sidebar-right"),
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
      var compiledTemplate = _.template(RightSidebarTemplate);
      this.$el.html(compiledTemplate);
      // append nested templates
      this.$("#tasks-panel").html(new Tasks().$el);
    },
    onSlideClick: function() {
      // hide right sidebar
      var self = this;
      // only sidebar-body of right sidebar handle this click
      this.$(".sidebar-body").fadeOut("slide", function() {
        // show minimized icon
        $(".mini-submenu-right").fadeIn();
        // recalculate margins
        self.collapseCallback();
      });
    }
  });
});
