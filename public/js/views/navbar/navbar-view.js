define([
  "jquery",
  "backbone",
  "underscore",
  "perfectScrollbar",
  // global jquery functions
  "global",
  // path to navbar html template
  "text!templates/navbar/navbar.html"
], function($, Backbone, _, Ps, Global, NavbarTemplate) {
  return Backbone.View.extend({
    el: $("#navbar"), // div container
    events: {
      "shown.bs.collapse #navbar-body": "onCollapseNavbar",
      "hidden.bs.collapse #navbar-body": "onExpandNavbar"
    },
    initialize: function() {
      // render on create
      this.render();
      // put perfect scrollbar on collapsed navbar
      this.$("#navbar-body").perfectScrollbar({
        // disable horizontal scroll
        suppressScrollX: true
      });
    },
    render: function() {
      // compile template
      var compiledTemplate = _.template(NavbarTemplate);
      this.$el.html(compiledTemplate);
    },
    onCollapseNavbar: function() {
      console.log("navbar collapsed");
      this.$("#navbar-body").perfectScrollbar("update");
      Global.applyMargins();
    },
    onExpandNavbar: function() {
      console.log("navbar expanded");
      this.$("#navbar-body").perfectScrollbar("update");
      Global.applyMargins();
    }
  });
});
