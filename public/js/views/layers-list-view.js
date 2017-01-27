define([
  "jquery",
  "backbone",
  "underscore",
  "text!templates/layers-list.html"
], function($, Backbone, _, LayersListTemplate) {
  var LayersListView = Backbone.View.extend({
    el: $("#layers-panel"),
    initialize: function() {
      this.render();
    },
    render: function() {
      var compiledTemplate = _.template(LayersListTemplate);
      this.$el.html(compiledTemplate);
    }
  });
  return LayersListView;
});
