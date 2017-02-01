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
      // one handler for both expand and collapse havbar
      "shown.bs.collapse #navbar-body": "onToggleNavbar",
      "hidden.bs.collapse #navbar-body": "onToggleNavbar"
    },
    initialize: function() {
      // render on create
      this.render();
      // put perfect scrollbar on collapsed navbar
      this.$("#navbar-body").perfectScrollbar({
        // disable horizontal scroll
        suppressScrollX: true
      });
      // attach local window resize handler
      var self = this;
      $(window).on("resize", function() {
        self.$("#navbar-body").perfectScrollbar("update");
      });
    },
    render: function() {
      // compile template
      var compiledTemplate = _.template(NavbarTemplate);
      this.$el.html(compiledTemplate);
    },
    onToggleNavbar: function() {
      // update scrollbar and sidebars margins
      this.$("#navbar-body").perfectScrollbar("update");
      Global.applyMargins();
    }
  });
});
