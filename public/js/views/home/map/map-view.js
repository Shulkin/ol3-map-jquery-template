define([
  "jquery",
  "backbone",
  "openlayers3",
], function($, Backbone, Ol) {
  // nested in home view
  return Backbone.View.extend({
    initialize: function() {
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
      // change event on layers collection
      this.collection.on("change", this.onLayersChange);
    },
    onLayersChange: function() {
      console.log("Some layer in collection changed!");
    }
  });
});
