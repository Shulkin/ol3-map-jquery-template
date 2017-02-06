define([
  "views/navbar/navbar-view", // menu navbar
  "views/home/home-view" // map, panels, etc.
], function(Navbar, Home) {
  var initialize = function() {
    // initialize global collection
    window.app = (window.app || {});
    // create navbar
    var navbar = new Navbar();
    // create content container
    var home = new Home();
  };
  return {
    initialize: initialize
  };
});
