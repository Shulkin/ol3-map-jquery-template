define([
  "jquery",
  "backbone",
  "underscore",
  // global utilities
  "utils/global",
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
      this.$("#layers-list-panel").html(new LayersList({
        // print layers list in view
        collection: window.app.collection.Layers
      }).$el);
      //this.$("#left-content-1-panel").html(new LeftContent1().$el);
    },
    // only sidebar-body of left sidebar handle this click
    onSlideClick: function() {
      // target .sidebar parent of this
      var target = this.$(".sidebar-body").closest(".sidebar");
      // hide left sidebar
      target.fadeOut("slide", function() {
        // show minimized icon
        $(".mini-submenu-left").fadeIn(function() {
          // recalculate margins
          Global.applyMargins();
        });
      });
    }
  });
});
