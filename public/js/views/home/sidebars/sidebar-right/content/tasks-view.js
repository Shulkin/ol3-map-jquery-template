define([
  "jquery",
  "backbone",
  "underscore",
  // path to html template
  "text!templates/home/sidebars/sidebar-right/content/tasks.html"
], function($, Backbone, _, TasksTemplate) {
  // nested in right sidebar view
  return Backbone.View.extend({
    // do not have predefined $el
    initialize: function() {
      // render on create
      this.render();
    },
    render: function() {
      // compile template
      var compiledTemplate = _.template(TasksTemplate);
      this.$el.html(compiledTemplate);
    }
  });
});
