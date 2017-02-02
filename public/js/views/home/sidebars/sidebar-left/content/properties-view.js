define([
  "jquery",
  "backbone",
  "underscore",
  "jqueryUi",
  "perfectScrollbar",
  // global jquery functions
  "global",
  // path to html template
  "text!templates/home/sidebars/sidebar-left/content/properties.html"
], function($, Backbone, _, Ui, Ps, Global, PropertiesTemplate) {
  // nested in left sidebar view
  return Backbone.View.extend({
    // do not have predefined $el
    events: {
      "shown.bs.collapse .panel-collapse": "onTogglePanel",
      "hidden.bs.collapse .panel-collapse": "onTogglePanel"
    },
    initialize: function() {
      // render on create
      this.render();
      // put perfect scrollbar on panel body
      this.$(".panel-body").perfectScrollbar();
      // attach local window resize handler
      var self = this;
      $(window).on("resize", function() {
        self.$(".panel-body").perfectScrollbar("update");
      });
      // make panel resizable with jQuery UI
      this.$(".panel-body").resizable({
        handles: {
          "s": this.$(".panel-resize-handle")
        },
        resize: function(evt, el) {
          // update scrollbar when stop resizing
          self.$(".panel-body").perfectScrollbar("update");
        }
      });
    },
    render: function() {
      // compile template
      var compiledTemplate = _.template(PropertiesTemplate);
      this.$el.html(compiledTemplate);
    },
    onTogglePanel: function() {
      // update scrollbar and sidebars margins
      this.$(".panel-body").perfectScrollbar("update");
      Global.applyMargins();
    }
  });
});
