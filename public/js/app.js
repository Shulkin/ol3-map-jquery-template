define([
  /*
  "jquery",
  "openlayers3",
  */
  "views/map-view", // openlayers3 map
  "views/navbar-view", // menu navbar
  "views/sidebar-left-view", // left sidebar
  "views/sidebar-right-view" // right sidebar
], function(/*$, ol, */Map, Navbar, LeftSidebar, RightSidebar) {
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
  var createMap = function() {
    var map = new ol.Map({
      target: "map",
      layers: [
        // define layers list
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: [0, 0],
        rotation: Math.PI / 6,
        zoom: 2
      })
    });
  };
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
    console.log("Initialize application");
    // render navbar call internally
    var navbar = new Navbar();
    // create map
    // create sidebars
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
