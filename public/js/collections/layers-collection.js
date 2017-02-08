define([
  "backbone",
  "openlayers3",
  // uid generator
  "utils/uid",
  // layer model
  "models/layer-model"
], function(Backbone, Ol, Uid, Layer) {
  return Backbone.Collection.extend({
    initialize: function() {
      // create default
      this.add({
        uid: Uid.generate(),
        name: "OpenStreetMap",
        visible: false,
        source: "OSM"
      });
      this.add({
        uid: Uid.generate(),
        name: "Bing",
        visible: true,
        source: "Bing"
      });
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
          uid: item.get("uid"),
          name: item.get("name"),
          visible: item.get("visible"),
          source: source
        }));
      });
      return result;
    }
  });
});
