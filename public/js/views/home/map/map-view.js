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
      this.collection.on("change:visible", this.onChangeLayerDisplay);
    },
    onChangeLayerDisplay: function(model, value, options) {
      console.log("onChangeLayerVisible");
      console.log("model.cid: " + model.cid);
      // iterate map layers looking for cid
      console.log("start loop...");
      window.app.map.getLayers().forEach(function(layer) {
        console.log("layer.cid = " + layer.get("cid"));
        if (layer.get("cid") === model.cid) {
          console.log("change visible to " + value);
          // perform smooth layer display transition
          var from = value ? 0 : layer.getOpacity();
          var to = value ? 1 : 0;
          $({n: from}).animate({n: to}, {
            duration: 500, // .5s
            start: function() { // always true on start!
              layer.setVisible(true);
            },
            step: function(now, fx) { // easing
              layer.setOpacity(now);
            },
            complete: function() { // hide only when necessary!
              layer.setVisible(value);
            }
          });
          /*
          // simple toggle display
          layer.setVisible(value);
          */
        }
      })
    }
  });
});
