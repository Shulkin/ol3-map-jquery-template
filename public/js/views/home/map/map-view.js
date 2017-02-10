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
          /*
          if (value) {
            // show layer
            var from = 0;
            var to = 1;
            console.log("from: " + from + ", to: " + to);
            console.log("layer.visible: " + layer.getVisible());
            console.log("layer.opacity: " + layer.getOpacity());
            $({n: from}).animate({n: to}, {
              duration: 500,
              start: function() {
                layer.setVisible(true);
              },
              step: function(now, fx) {
                layer.setOpacity(now);
              }
            });
          } else {
            // hide layer
            var from = layer.getOpacity();
            var to = 0;
            console.log("from: " + from + ", to: " + to);
            console.log("layer.visible: " + layer.getVisible());
            console.log("layer.opacity: " + layer.getOpacity());
            $({n: from}).animate({n: to}, {
              duration: 500,
              step: function(now, fx) {
                layer.setOpacity(now);
              },
              complete: function() {
                layer.setVisible(false);
              }
            });
          }
          */
          /*
          var from = value ? 0 : layer.getOpacity();
          var to = value ? 100 : 0;
          $({opacity: from}).animate({opacity: to}, {
            duration: 1000,
            start: function() {
              console.log("start easing");
            },
            step: function(now, fx) {
              layer.setOpacity(now);
            },
            complete: function() {
              console.log("complete easing");
            }
          });
          */
          /*
          layer.setVisible(value);
          */
        }
      })
    }
  });
});
