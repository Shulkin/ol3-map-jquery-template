define([
  "jquery",
  "backbone",
  "openlayers3",
  // path to utilities
  "utils/uid"
  // list of layers
  "collections/layers-collection"
], function($, Backbone, Ol, Uid, Layers) {
  // nested in home view
  return Backbone.View.extend({
    initialize: function() {
      // create list of default layers data
      var layers = new Layers();
      layers.add({
        uid: Uid.generate()
        name: "OpenStreetMap"
      });
      layers.add({
        uid: Uid.generate()
        name: "Bing"
      }));
      // make it global
      window.app.collections.Layers = layers;
      // convert list to actual openlayers3 layers
      //--
      // create openlayers3 map
      var map = new Ol.Map({
        target: "map",
        layers: layers.toJSON()/*[
          new Ol.layer.Tile({
            name: "OpenStreetMap",
            source: new Ol.source.OSM()
          }),
          new Ol.layer.Tile({
            name: "Bing",
            source: new Ol.source.BingMaps({
              key: "Av3qOHrNHqfAxiIj8un9mwLbZoejQ55vnDApDU2qRzhn0sYeHtChkB3KWnN14WDE",
              imagerySet: "Aerial"
            })
          })
        ]*/,
        view: new Ol.View({
          center: [0, 0],
          rotation: Math.PI / 6,
          zoom: 2
        })
      });
    }
  });
});
