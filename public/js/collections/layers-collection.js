define([
  "backbone",
  "openlayers3",
  // layer model
  "models/layer-model"
], function(Backbone, Ol, Layer) {
  return Backbone.Collection.extend({
    initialize: function() {
      // create default
      this.add(new Layer({
        name: "OpenStreetMap",
        visible: false,
        opacity: 100,
        source: "OSM"
      }));
      this.add(new Layer({
        name: "Bing",
        visible: true,
        opacity: 100,
        source: "Bing"
      }));
    },
    toLayers: function() {
      // convert collection to actual openlayers3 layers
      var result = [];
      this.each(function(item) {
        var source;
        // determine new layer source
        switch (item.get("source")) {
          case "OSM":
            source = new Ol.source.OSM();
            break;
          case "Bing":
            source = new Ol.source.BingMaps({
              key: "Av3qOHrNHqfAxiIj8un9mwLbZoejQ55vnDApDU2qRzhn0sYeHtChkB3KWnN14WDE",
              imagerySet: "Aerial"
            });
            break;
          default:
            // OpenStreetMap by default
            source = new Ol.source.OSM();
        }
        result.push(new Ol.layer.Tile({
          cid: item.cid,
          name: item.get("name"),
          visible: item.get("visible"),
          source: source
        }));
      });
      return result;
    }
  });
});
