define([
  "jquery",
  "backbone",
  "underscore",
  // global utilities
  "utils/global",
  // nested views
  "views/home/sidebars/sidebar-right/content/right-content-1-view",
  // path to left sidebar html template
  "text!templates/home/sidebars/sidebar-right/sidebar-right.html"
], function($, Backbone, _, Global, RightContent1, RightSidebarTemplate) {
  // nested in home view
  return Backbone.View.extend({
    // do not have predefined $el
    events: {
      "click .slide-submenu": "onSlideClick"
    },
    initialize: function() {
      // render on create
      this.render();
    },
    render: function() {
      // compile template
      var compiledTemplate = _.template(RightSidebarTemplate);
      this.$el.html(compiledTemplate);
      // append nested views
      this.$("#right-content-1-panel").html(new RightContent1().$el);
    },
      // only sidebar-body of right sidebar handle this click
    onSlideClick: function() {
      // target .sidebar parent of this
      var target = this.$(".sidebar-body").closest(".sidebar");
      // hide right sidebar
      target.fadeOut("slide", function() {
        // show minimized icon
        $(".mini-submenu-right").fadeIn();
        // recalculate margins
        Global.applyMargins();
      });
    }
  });
});
