define([
  "views/navbar/navbar-view", // menu navbar
  "views/home/home-view" // map, panels, etc.
], function(Navbar, Home) {
  /*
  var applyMargins = function() {
    // ol-zoom near left sidebar
    if ($(".mini-submenu-left").is(":visible")) {
      $("#map .ol-zoom") // sidebar closed
        .css("margin-left", 0) // 0px from left
        // navbar height can vary
        .css("margin-top", $(".navbar").height())
        // 0.4em from bottom of mini-icon
        .css("margin-top", "-=10px").css("margin-top", "+=.4em");
    } else {
      $("#map .ol-zoom") // sidebar opened
        // 0.4em from right corner of left sidebar
        .css("margin-left", $(".sidebar-left").width()).css("margin-left", "+=.4em")
        .css("margin-top", $(".navbar").height()).css("margin-top", "-=50px");
    }
    // ol-rotate near right sidebar
    if ($(".mini-submenu-right").is(":visible")) {
      $("#map .ol-rotate")
        .css("margin-right", 0) // 0px from right
        .css("margin-top", $(".navbar").height())
        // 0.4em from bottom of mini-icon
        .css("margin-top", "-=10px").css("margin-top", "+=.4em");
    } else {
      $("#map .ol-rotate")
        // 0.4em from left corner of right sidebar
        .css("margin-right", $(".sidebar-right").width()).css("margin-right", "+=.4em")
        .css("margin-top", $(".navbar").height()).css("margin-top", "-=50px");
    }
    // set offset margin depending on navbar height
    $(".navbar-offset").css("margin-top", $(".navbar").height());
  };
  */
  /*
  var isConstrained = function() {
    return $("div.middle").width() == $(window).width();
  };
  var applyInitialUIState = function() {
    // on initial application state
    if (isConstrained()) {
      // show sidebars
      $(".sidebar-left .sidebar-body").fadeOut("slide");
      $(".sidebar-right .sidebar-body").fadeOut("slide");
      // hide minimized icons
      $(".mini-submenu-left").fadeIn();
      $(".mini-submenu-right").fadeIn();
    }
  };
  var createHandlers = function() {
    // click on left sidebar slide-submenu
    $(".sidebar-left .slide-submenu").on("click", function() {
      // hide left sidebar
      $(this).closest(".sidebar-body").fadeOut("slide", function() {
        // show minimized icon
        $(".mini-submenu-left").fadeIn();
        applyMargins();
      });
    });
    // click on left sidebar minimized icon
    $(".mini-submenu-left").on("click", function() {
      // hide icon
      $(this).fadeOut(function() {
        // show sidebar
        $(".sidebar-left .sidebar-body").fadeIn("slide", applyMargins);
      });
    });
    // click on right sidebar slide-submenu
    $(".sidebar-right .slide-submenu").on("click", function() {
      // hide right sidebar
      $(this).closest(".sidebar-body").fadeOut("slide", function() {
        // show minimized icon
        $(".mini-submenu-right").fadeIn();
        applyMargins();
      });
    });
    // click on right sidebar minimized icon
    $(".mini-submenu-right").on("click", function() {
      // hide icon
      $(this).fadeOut(function() {
        // show sidebar
        $(".sidebar-right .sidebar-body").fadeIn("slide", applyMargins);
      });
    });
    // on collapse content in sidebar panel
    $(".panel-collapse").on("hidden.bs.collapse", applyMargins);
    // on expand content in sidebar panel
    $(".panel-collapse").on("shown.bs.collapse", applyMargins);
    // calculate margins for openlayers3 controls on window resize
    $(window).on("resize", applyMargins);
  };
  */
  var initialize = function() {
    // create navbar
    var navbar = new Navbar();
    // create content container
    var home = new Home();
    /*
    // create openlayers3 map
    var map = new Map();
    // create sidebars
    var leftSidebar = new LeftSidebar({
      onCollapse: applyMargins
    });
    var rightSidebar = new RightSidebar({
      onCollapse: applyMargins
    });
    */
    /*
    createHandlers();
    createMap();
    // show sidebars by default
    applyInitialUIState();
    applyMargins();
    */
  };
  return {
    initialize: initialize
  };
});
