define([
  "jquery",
  "backbone",
  "underscore",
  // global jquery functions
  "global",
  // nested views
  "views/home/sidebars/sidebar-left/content/layers-list-view",
  "views/home/sidebars/sidebar-left/content/left-content-1-view",
  // path to left sidebar html template
  "text!templates/home/sidebars/sidebar-left/sidebar-left.html"
], function($, Backbone, _, Global, LayersList, LeftContent1, LeftSidebarTemplate) {
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
      var compiledTemplate = _.template(LeftSidebarTemplate);
      this.$el.html(compiledTemplate);
      // append nested views
      this.$("#layers-list-panel").html(new LayersList().$el);
      this.$("#left-content-1-panel").html(new LeftContent1().$el);
    },
    // only sidebar-body of left sidebar handle this click
    onSlideClick: function() {
      // hide left sidebar
      this.$(".sidebar-body").fadeOut("slide", function() {
        // show minimized icon
        $(".mini-submenu-left").fadeIn();
        // recalculate margins
        Global.applyMargins();
      });
    }
  });
});
