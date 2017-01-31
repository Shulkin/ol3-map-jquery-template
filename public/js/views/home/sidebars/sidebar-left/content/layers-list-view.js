define([
  "jquery",
  "backbone",
  "underscore",
  // path to html template
  "text!templates/home/sidebars/sidebar-left/content/layers-list.html"
], function($, Backbone, _, LayersListTemplate) {
  // nested in left sidebar view
  return Backbone.View.extend({
    // do not have predefined $el
    initialize: function() {
      // render on create
      this.render();
    },
    render: function() {
      // compile template
      var compiledTemplate = _.template(LayersListTemplate);
      this.$el.html(compiledTemplate);
    }
  });
});
