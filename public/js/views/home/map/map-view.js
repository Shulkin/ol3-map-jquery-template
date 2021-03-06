define([
  "jquery",
  "backbone",
  "openlayers3",
], function($, Backbone, Ol) {
  // nested in home view
  return Backbone.View.extend({
    map: {}, // store map in view instance
    initialize: function() {
      // create openlayers3 map
      this.map = new Ol.Map({
        target: "map",
        layers: this.collection.toLayers(),
        view: new Ol.View({
          center: [0, 0],
          rotation: Math.PI / 6,
          zoom: 2
        })
      });
      // create mouse position control
      var mousePosition = new Ol.control.MousePosition({
        coordinateFormat: Ol.coordinate.createStringXY(2),
        projection: "EPSG:4326",
        className: "custom-mouse-position",
        target: document.getElementById("mouse-position"),
        undefinedHTML: "&nbsp;"
      });
      this.map.addControl(mousePosition);
      // listen for layers collection events
      this.collection.on("change:visible",
        this.onChangeLayerDisplay, // show/hide layer
        this // pass this view to handler
      );
      this.collection.on("change:opacity",
        this.onChangeLayerOpacity, this
      );
    },
    onChangeLayerDisplay: function(model, value, options) {
      // iterate map layers looking for cid
      this.map.getLayers().forEach(function(layer) {
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
      });
    },
    onChangeLayerOpacity: function(model, value, options) {
      this.map.getLayers().forEach(function(layer) {
        if (layer.get("cid") === model.cid) {
          layer.setOpacity(model.get("opacity") / 100);
        }
      });
    }
  });
});
