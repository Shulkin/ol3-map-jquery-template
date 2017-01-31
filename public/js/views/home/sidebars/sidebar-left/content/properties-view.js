define([
  "jquery",
  "backbone",
  "underscore",
  "perfectScrollbarJQuery",
  // path to html template
  "text!templates/home/sidebars/sidebar-left/content/properties.html"
], function($, Backbone, _, Ps, PropertiesTemplate) {
  // nested in left sidebar view
  return Backbone.View.extend({
    // do not have predefined $el
    initialize: function() {
      // render on create
      this.render();
      // put perfect scrollbar on panel body
      this.$(".panel-body").perfectScrollbar();
      // update immediately
      this.$(".panel-body").perfectScrollbar("update");
    },
    render: function() {
      // compile template
      var compiledTemplate = _.template(PropertiesTemplate);
      this.$el.html(compiledTemplate);
    }
  });
});
