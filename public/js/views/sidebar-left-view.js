define([
  "jquery",
  "backbone",
  "underscore",
  // nested panels
  "layers-list-view",
  "properties-view"
  // path to left sidebar html template
  "text!templates/sidebar-left.html"
], function($, Backbone, _, LayersList, Properties, LeftSidebarTemplate) {
  var SidebarView = Backbone.View.extend({
    el: $("#accordion-left"),
    initialize: function() {
      // create panels in sidebar
      var layersList = new LayersList();
      var properties = new Properties();
      // call for render
      this.render();
    },
    render: function() {
      var compiledTemplate = _.template(LeftSidebarTemplate);
      this.$el.html(compiledTemplate);
    }
  });
  return SidebarView;
});
