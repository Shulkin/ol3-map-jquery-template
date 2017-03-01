(function() {
  // place config in self-invoking function, do not polute global namespace
  var bowerDir = "../bower_components"; // with path to bower
  require.config({
    // explicitly state module dependenices
    shim: {
      // load underscore and jquery before backbone
      backbone: {
        deps: ["underscore", "jquery"]
      }, // et cetera
      bootstrap: {
        deps: ["jquery"]
      },
      jqueryUi: {
        deps: ["jquery"]
      }
    },
    paths: {
      // libraries
      backbone: bowerDir + "/backbone/backbone-min",
      bootstrap: bowerDir + "/bootstrap/dist/js/bootstrap.min",
      jquery: bowerDir + "/jquery/dist/jquery.min",
      jqueryUi: bowerDir + "/jquery-ui/jquery-ui.min",
      openlayers3: bowerDir + "/openlayers3/ol",
      underscore: bowerDir + "/underscore/underscore-min",
      // perfect-scrollbar by noraesae (Hyunje Jun), as jQuery plugin
      perfectScrollbar: bowerDir + "/perfect-scrollbar/js/perfect-scrollbar.jquery",
      // html templates
      templates: "../templates"
    },
    // application entry point
    deps: ["main"]
  });
})();
