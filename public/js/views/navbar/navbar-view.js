define([
  "jquery",
  "backbone",
  "underscore",
  // path to navbar html template
  "text!templates/navbar/navbar.html"
], function($, Backbone, _, NavbarTemplate) {
  return Backbone.View.extend({
    el: $("#navbar"), // div container
    initialize: function() {
      // render on create
      this.render();
    },
    render: function() {
      var compiledTemplate = _.template(NavbarTemplate);
      this.$el.html(compiledTemplate);
    }
  });
});
