define([
  "jquery",
  "backbone",
  "underscore",
  // path to html template
  "text!templates/home/sidebars/sidebar-left/content/properties.html"
], function($, Backbone, _, PropertiesTemplate) {
  // nested in left sidebar view
  return Backbone.View.extend({
    // do not have predefined $el
    initialize: function() {
      // render on create
      this.render();
    },
    render: function() {
      // compile template
      var compiledTemplate = _.template(PropertiesTemplate);
      this.$el.html(compiledTemplate);
    }
  });
});
