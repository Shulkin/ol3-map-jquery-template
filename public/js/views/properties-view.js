define([
  "jquery",
  "backbone",
  "underscore",
  "text!templates/properties.html"
], function($, Backbone, _, PropertiesTemplate) {
  var PropertiesView = Backbone.View.extend({
    el: $("#properties-panel"),
    initialize: function() {
      this.render();
    },
    render: function() {
      var compiledTemplate = _.template(PropertiesTemplate);
      this.$el.html(compiledTemplate);
    }
  });
  return PropertiesView;
});
