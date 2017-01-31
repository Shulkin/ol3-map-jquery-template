define([
  "jquery",
  "backbone",
  "underscore",
  "text!templates/tasks.html"
], function($, Backbone, _, TasksTemplate) {
  // nested in right sidebar
  var TasksView = Backbone.View.extend({
    // do not have predefined $el
    initialize: function() {
      this.render();
    },
    render: function() {
      var compiledTemplate = _.template(TasksTemplate);
      this.$el.html(compiledTemplate);
    }
  });
  return TasksView;
});
