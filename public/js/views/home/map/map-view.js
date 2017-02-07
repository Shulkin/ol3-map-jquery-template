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
      // create default layers list
      var list = new Layers();
      this.collection = list; // save it
      // make it global
      window.app.collection.Layers = list;
    },
    create: function() {
      // create openlayers3 map
      var map = new Ol.Map({
        target: "map",
        layers: this.collection.toLayers(),
        view: new Ol.View({
          center: [0, 0],
          rotation: Math.PI / 6,
          zoom: 2
        })
      });
    }
  });
});
