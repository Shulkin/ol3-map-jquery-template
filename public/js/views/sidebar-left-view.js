define([
  "jquery",
  "backbone",
  "underscore",
  // nested panels
  "views/layers-list-view",
  "views/properties-view",
  // path to left sidebar html template
  "text!templates/sidebar-left.html"
], function($, Backbone, _, LayersList, Properties, LeftSidebarTemplate) {
  var SidebarView = Backbone.View.extend({
    el: $("#accordion-left"),
    initialize: function() {
      console.log("sidebarLeft: initialize");
      // call for render
      this.render();
    },
    render: function() {
      console.log("sidebarLeft: render");
      var compiledTemplate = _.template(LeftSidebarTemplate);
      this.$el.html(compiledTemplate);
      // append nested templates
      this.$("#layers-panel").html(new LayersList().$el);
      this.$("#properties-panel").html(new Properties().$el);
    }
  });
  return SidebarView;
});
