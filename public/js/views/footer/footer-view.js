define([
  "jquery",
  "backbone",
  "underscore",
  // path to footer html template
  "text!templates/footer/footer.html"
], function($, Backbone, _, FooterTemplate) {
  return Backbone.View.extend({
    el: $("#footer"), // div container
    initialize: function() {
      // render on create
      this.render();
    },
    render: function() {
      // compile template
      var compiledTemplate = _.template(FooterTemplate);
      this.$el.html(compiledTemplate);
    }
  });
});
