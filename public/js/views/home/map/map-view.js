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
      // save map to global variable
      window.app.map = map;
      // bind event handlers
      this.collection.on("change:visible", this.onChangeLayerVisible);
    },
    onChangeLayerVisible: function(model, value, options) {
      console.log("onChangeLayerVisible");
      console.log("model.cid: " + model.cid);
      // iterate map layers looking for cid
      console.log("start loop...");
      window.app.map.getLayers().forEach(function(layer) {
        console.log("layer.cid = " + layer.get("cid"));
        if (layer.get("cid") === model.cid) {
          console.log("change visible to " + value);
          layer.set("visible", value);
        }
      })
    }
  });
});
