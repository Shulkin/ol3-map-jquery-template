require.config({
  paths: {
    jquery: "./bower_components/jquery/dist/jquery.min",
    underscore: "./bower_components/underscore/underscore-min"
  }
});
require([
  "public/js/app"
], function(App) {
  App.initialize();
});
