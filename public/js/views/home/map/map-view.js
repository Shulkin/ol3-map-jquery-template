define([
  "jquery",
  "backbone",
  "openlayers3",
  // collection of layers
  "collections/layer-collection"
], function($, Backbone, Ol, Layers) {
  // nested in home view
  return Backbone.View.extend({
    initialize: function() {
      var map = new Ol.Map({
        target: "map",
        layers: [
          // define layers list
          new Ol.layer.Tile({
            source: new Ol.source.OSM()
          })
        ],
        view: new Ol.View({
          center: [0, 0],
          rotation: Math.PI / 6,
          zoom: 2
        })
      });
    }
  });
});
