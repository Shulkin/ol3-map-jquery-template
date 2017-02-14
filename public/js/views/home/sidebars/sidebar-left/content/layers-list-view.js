define([
  "jquery",
  "backbone",
  "underscore",
  "jqueryUi",
  "perfectScrollbar",
  // global utilities
  "utils/global",
  // path to html template
  "text!templates/home/sidebars/sidebar-left/content/layers-list.html"
], function($, Backbone, _, Ui, Ps, Global, LayersListTemplate) {
  // nested in left sidebar view
  return Backbone.View.extend({
    // do not have predefined $el
    events: {
      "shown.bs.collapse .panel-collapse": "onTogglePanel",
      "hidden.bs.collapse .panel-collapse": "onTogglePanel",
      "click .layer-display input:checkbox": "onClickLayerDisplay",
      "click .collapser": "onClickLayerOptions"
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
      // create layer opacity sliders
      this.$(".ui-slider").slider();
    },
    render: function() {
      // compile template
      var compiledTemplate = _.template(LayersListTemplate);
      this.$el.html(compiledTemplate({layers: this.collection.toJSON()}));
    },
    onTogglePanel: function() {
      // update scrollbar and sidebars margins
      this.$(".panel-resizable").perfectScrollbar("update");
      Global.applyMargins();
    },
    onClickLayerDisplay: function(e) {
      var target = $(e.target);
      // get layer model by cid (undefined otherwise)
      var layer = this.collection.get({cid: target.attr("value")});
      if (layer !== undefined) { // if found any
        // set visible attribute
        layer.set({visible: target.is(":checked")});
      }
    },
    onClickLayerOptions: function(e) {
      // collapse element next to target
      $(e.target).next().collapse("toggle");
    }
  });
});
