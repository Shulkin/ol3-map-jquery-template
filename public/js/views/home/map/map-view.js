define([
  "jquery",
  "backbone",
  "openlayers3"
], function($, Backbone, ol) {
  return Backbone.View.extend({
    initialize: function() {
      var map = new ol.Map({
        target: "map",
        layers: [
          // define layers list
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: [0, 0],
          rotation: Math.PI / 6,
          zoom: 2
        })
      });
    }
  });
});
