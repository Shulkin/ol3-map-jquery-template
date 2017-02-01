define([
  "jquery",
  "backbone",
  "underscore",
  "perfectScrollbar",
  // path to html template
  "text!templates/home/sidebars/sidebar-right/content/tasks.html"
], function($, Backbone, _, Ps, TasksTemplate) {
  // nested in right sidebar view
  return Backbone.View.extend({
    // do not have predefined $el
    initialize: function() {
      // render on create
      this.render();
      // put perfect scrollbar on panel body
      this.$(".panel-body").perfectScrollbar();
      // attach local window resize handler
      var self = this;
      $(window).on("resize", function() {
        console.log("tasks-view: resize window");
        self.$(".panel-body").perfectScrollbar("update");
      });
    },
    render: function() {
      // compile template
      var compiledTemplate = _.template(TasksTemplate);
      this.$el.html(compiledTemplate);
    }
  });
});
