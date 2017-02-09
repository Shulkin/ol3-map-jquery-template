define([
  "backbone",
], function(Backbone) {
  return Backbone.Model.extend({
    // override toJSON method
    toJSON: function() {
     var json = Backbone.Model.prototype.toJSON.apply(this, arguments);
     // to get cid from model attributes
     json.cid = this.cid;
     return json;
    }
  });
});
