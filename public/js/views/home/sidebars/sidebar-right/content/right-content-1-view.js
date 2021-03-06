define([
  "jquery",
  "backbone",
  "underscore",
  "jqueryUi",
  "perfectScrollbar",
  // global utilities
  "utils/global",
  // path to html template
  "text!templates/home/sidebars/sidebar-right/content/right-content-1.html"
], function($, Backbone, _, Ui, Ps, Global, RightContent1Template) {
  // nested in right sidebar view
  return Backbone.View.extend({
    // do not have predefined $el
    events: {
      "shown.bs.collapse .panel-collapse": "onTogglePanel",
      "hidden.bs.collapse .panel-collapse": "onTogglePanel"
    },
    initialize: function() {
      // render on create
      this.render();
      // put perfect scrollbar on resizable panel body
      this.$(".panel-resizable").perfectScrollbar({
        scrollYMarginOffset: 28
      });
      // attach local window resize handler
      var self = this;
      $(window).on("resize", function() {
        // scrollbar should be applied to resizable area
        self.$(".panel-resizable").perfectScrollbar("update");
      });
      // make panel resizable with jQuery UI
      this.$(".panel-resizable").resizable({
        handles: {"s": this.$(".ui-resizable-s")},
        resize: function(evt, el) {
          // update scrollbar when resizing
          self.$(".panel-resizable").perfectScrollbar("update");
        }
      });
    },
    render: function() {
      // compile template
      var compiledTemplate = _.template(RightContent1Template);
      this.$el.html(compiledTemplate);
    },
    onTogglePanel: function() {
      // update scrollbar and sidebars margins
      this.$(".panel-resizable").perfectScrollbar("update");
      Global.applyMargins();
    }
  });
});
