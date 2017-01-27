define([
  "jquery",
  "backbone",
  "underscore",
  "text!templates/layers-list.html"
], function($, Backbone, _, LayersListTemplate) {
  // nested in left sidebar
  var LayersListView = Backbone.View.extend({
    // do not have predefined $el
    initialize: function() {
      console.log("layersList: initialize");
      this.render();
    },
    render: function() {
      console.log("layersList: render");
      var compiledTemplate = _.template(LayersListTemplate);
      this.$el.html(compiledTemplate);
    }
  });
  return LayersListView;
});
