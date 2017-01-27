require.config({
  // explicitly state module dependenices
  shim: {
    // load underscore and jquery before backbone
    backbone: {
      deps: ["underscore", "jquery"]
    }, // et cetera
    bootstrap: {
      deps: ["jquery"]
    }
  },
  paths: {
    // libraries
    backbone: "../bower_components/backbone/backbone-min",
    bootstrap: "../bower_components/bootstrap/dist/js/bootstrap.min",
    jquery: "../bower_components/jquery/dist/jquery.min",
    openlayers3: "../bower_components/openlayers3/ol",
    underscore: "../bower_components/underscore/underscore-min",
    // html templates
    templates: "../templates"
  }
});
require([
  "app",
  // bootstrap should be last
  "bootstrap"], function(App) {
  App.initialize();
});
