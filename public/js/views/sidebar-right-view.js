define([
  "jquery",
  "backbone",
  "underscore",
  // path to left sidebar html template
  "text!templates/sidebar-right.html"
], function($, Backbone, _, RightSidebarTemplate) {
  var SidebarView = Backbone.View.extend({
    el: $("#accordion-right"),
    initialize: function() {
      this.render();
    },
    render: function() {
      var compiledTemplate = _.template(RightSidebarTemplate);
      this.$el.html(compiledTemplate);
    }
  });
  return SidebarView;
});
