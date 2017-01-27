define([
  "jquery",
  "backbone",
  "underscore",
  "text!templates/properties.html"
], function($, Backbone, _, PropertiesTemplate) {
  // nested in left sidebar
  var PropertiesView = Backbone.View.extend({
    // do not have predefined $el
    initialize: function() {
      console.log("properties: initialize");
      this.render();
    },
    render: function() {
      console.log("properties: render");
      var compiledTemplate = _.template(PropertiesTemplate);
      this.$el.html(compiledTemplate);
    }
  });
  return PropertiesView;
});
