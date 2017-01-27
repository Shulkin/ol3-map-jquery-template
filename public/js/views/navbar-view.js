define([
  "jquery",
  "underscore",
  "backbone",
  // path to navbar html template
  "text!templates/navbar.html"
], function($, _, Backbone, NavbarTemplate) {
  var NavbarView = Backbone.View.extend({
    el: $("#navbar"), // navbar div container
    render: function() {
      var compiledTemplate = _.template(NavbarTemplate);
      this.$el.html(compiledTemplate);
    }
  });
  return NavbarView;
});
