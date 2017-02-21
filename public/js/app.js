define([
  // collections
  "collections/layers-collection", // layers list
  // views
  "views/navbar/navbar-view", // menu navbar
  "views/home/home-view", // map, panels, etc.
  "views/footer/footer-view" // footer
], function(Layers, Navbar, Home, Footer) {
  var initialize = function() {
    // initialize global storage
    window.app = (window.app || {});
    window.app.collection = (window.app.collection || {});
    // create list of layers
    var list = new Layers();
    // make it global
    window.app.collection.Layers = list;
    // create navbar
    var navbar = new Navbar();
    // create content container
    var home = new Home();
    // create footer
    var footer = new Footer();
  };
  return {
    initialize: initialize
  };
});
