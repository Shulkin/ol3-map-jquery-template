require.config({
  shim: {
    bootstrap: {
      deps: ["jquery"]
    }
  },
  paths: {
    jquery: "../bower_components/jquery/dist/jquery.min",
    openlayers3: "../bower_components/openlayers3/ol",
    bootstrap: "../bower_components/bootstrap/dist/js/bootstrap.min"
  }
});
require(["app", "bootstrap"], function(App) {
  App.initialize();
});
