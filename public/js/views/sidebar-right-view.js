define([
  "jquery",
  "backbone",
  "underscore",
  // nested panels
  "views/tasks-view",
  // path to left sidebar html template
  "text!templates/sidebar-right.html"
], function($, Backbone, _, Tasks, RightSidebarTemplate) {
  var SidebarView = Backbone.View.extend({
    el: $("#accordion-right"),
    initialize: function() {
      // call for render
      this.render();
    },
    render: function() {
      var compiledTemplate = _.template(RightSidebarTemplate);
      this.$el.html(compiledTemplate);
      // append nested templates
      this.$("#tasks-panel").html(new Tasks().$el);
    }
  });
  return SidebarView;
});
