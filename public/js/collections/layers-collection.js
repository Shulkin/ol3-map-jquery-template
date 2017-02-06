define([
  "backbone",
  // layer model
  "models/layer-model.js"
], function(Backbone, Layer) {
  return Backbone.Collection.extend({
    model: LayerModel,
    initialize: function() {
    }
  });
});
