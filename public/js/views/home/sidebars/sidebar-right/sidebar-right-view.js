define([
  "jquery",
  "backbone",
  "underscore",
  // nested views
  "views/home/sidebars/sidebar-right/content/tasks-view",
  // path to left sidebar html template
  "text!templates/home/sidebars/sidebar-right/sidebar-right.html"
], function($, Backbone, _, Tasks, RightSidebarTemplate) {
  // nested in home view
  return Backbone.View.extend({
    // do not have predefined $el
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
      // compile template
      var compiledTemplate = _.template(RightSidebarTemplate);
      this.$el.html(compiledTemplate);
      // append nested views
      this.$("#tasks-panel").html(new Tasks().$el);
    },
    onSlideClick: function() {
      // only sidebar-body of right sidebar handle this click
      var self = this;
      // hide right sidebar
      this.$(".sidebar-body").fadeOut("slide", function() {
        // show minimized icon
        $(".mini-submenu-right").fadeIn();
        // recalculate margins
        self.collapseCallback();
      });
    }
  });
});
