define([
  "jquery",
  "backbone",
  "openlayers3",
  // collection of layers
  "collections/layers-collection"
], function($, Backbone, Ol, Layers) {
  // nested in home view
  return Backbone.View.extend({
    initialize: function() {
      // create list of default layers data
      var list = new Layers();
      // make it global
      window.app.collections.Layers = list;
      // create openlayers3 map
      var map = new Ol.Map({
        target: "map",
        layers: list.toLayers(),
        view: new Ol.View({
          center: [0, 0],
          rotation: Math.PI / 6,
          zoom: 2
        })
      });
    }
  });
});
