define([
  "jquery",
  "backbone",
  "openlayers3",
], function($, Backbone, Ol) {
  var map; // store map as local variable in module
  // nested in home view
  return Backbone.View.extend({
    initialize: function() {
      // create openlayers3 map
      map = new Ol.Map({
        target: "map",
        layers: this.collection.toLayers(),
        view: new Ol.View({
          center: [0, 0],
          rotation: Math.PI / 6,
          zoom: 2
        })
      });
      // bind event handlers on layers collection
      this.collection.on("change:visible", this.onChangeLayerDisplay);
    },
    onChangeLayerDisplay: function(model, value, options) {
      // iterate map layers looking for cid
      map.getLayers().forEach(function(layer) {
        if (layer.get("cid") === model.cid) {
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
        }
      })
    }
  });
});
