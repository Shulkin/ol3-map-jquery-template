define([
  "jquery",
  "backbone",
  "underscore",
  // path to navbar html template
  "text!templates/navbar.html"
], function($, Backbone, _, NavbarTemplate) {
  var NavbarView = Backbone.View.extend({
    el: $("#navbar"), // navbar div container
    initialize: function() {
      // render on create
      this.render();
    },
    render: function() {
      var compiledTemplate = _.template(NavbarTemplate);
      this.$el.html(compiledTemplate);
    }
  });
  return NavbarView;
});
