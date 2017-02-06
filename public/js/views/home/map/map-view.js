define([
  "jquery",
  "backbone",
  "openlayers3",
  // list of layers
  "collections/layers-collection"
], function($, Backbone, Ol) {
  // nested in home view
  return Backbone.View.extend({
    initialize: function() {
      // create list of default layers
      var layers = new Layers();
      layers.add({
        name: "OpenStreetMap",
        source: new Ol.source.OSM
      });
      layers.add({
        name: "Bing",
        source: new Ol.source.BingMaps({
          key: "Av3qOHrNHqfAxiIj8un9mwLbZoejQ55vnDApDU2qRzhn0sYeHtChkB3KWnN14WDE"
        })
      });
      // make it global
      window.app.collections.Layers = layers;
      // create openlayers3 map
      var map = new Ol.Map({
        target: "map",
        layers: layers.toJSON(),
        view: new Ol.View({
          center: [0, 0],
          rotation: Math.PI / 6,
          zoom: 2
        })
      });
    }
  });
});
