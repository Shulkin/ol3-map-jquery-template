function applyMargins() {
  // ol-zoom near left sidebar
  if ($(".mini-submenu-left").is(":visible")) {
    $("#map .ol-zoom") // sidebar closed
      .css("margin-left", 0)
      .css("margin-top", $(".navbar").height())
      .css("margin-top", "-=10px").css("margin-top", "+=.4em");
      /*
      .removeClass("zoom-top-opened-sidebar")
      .addClass("zoom-top-collapsed");
      */
  } else {
    $("#map .ol-zoom") // sidebar opened
      .css("margin-left", $(".sidebar-left").width()).css("margin-left", "+=.4em")
      .css("margin-top", $(".navbar").height()).css("margin-top", "-=50px");
      /*
      .removeClass("zoom-top-opened-sidebar")
      .removeClass("zoom-top-collapsed");
      */
  }
  // ol-rotate near right sidebar
  if ($(".mini-submenu-right").is(":visible")) {
    $("#map .ol-rotate")
      .css("margin-right", 0)
      .css("margin-top", $(".navbar").height())
      .css("margin-top", "-=10px").css("margin-top", "+=.4em");
      /*
      .removeClass("zoom-top-opened-sidebar")
      .addClass("zoom-top-collapsed");
      */
  } else {
    $("#map .ol-rotate")
      .css("margin-right", $(".sidebar-right").width()).css("margin-right", "+=.4em")
      .css("margin-top", $(".navbar").height()).css("margin-top", "-=50px");
      /*
      .removeClass("zoom-top-opened-sidebar")
      .removeClass("zoom-top-collapsed");
      */
  }
  // set offset margin depending on navbar height
  $(".navbar-offset").css("margin-top", $(".navbar").height());
}
function isConstrained() {
  return $("div.middle").width() == $(window).width();
}
function applyInitialUIState() {
  // on initial application state
  if (isConstrained()) {
    // show sidebars
    $(".sidebar-left .sidebar-body").fadeOut("slide");
    $(".sidebar-right .sidebar-body").fadeOut("slide");
    // hide minimized icons
    $(".mini-submenu-left").fadeIn();
    $(".mini-submenu-right").fadeIn();
  }
}
// init application
$(function() {
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
  // create map
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
  // show sidebars by default
  applyInitialUIState();
  applyMargins();
});
