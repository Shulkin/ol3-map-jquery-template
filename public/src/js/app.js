// helper functions
function applyMargins() {
  var leftToggler = $(".min-submenu-left");
  var rightToggler = $(".min-submenu-right");
  if (leftToggler.is(":visible")) {
    $("#map .ol-zoom")
    .css("margin-left", 0)
    .removeClass("zoom-top-opened-sidebar")
    .addClass("zoom-top-collapsed");
  } else {
    $("#map .ol-zoom")
    .css("margin-left", $(".sidebar-left").width())
    .removeClass("zoom-top-opened-sidebar")
    .removeClass("zoom-top-collapsed");
  }
  if (rightToggler.is(":visible")) {
    $("#map .ol-rotate")
    .css("margin-right", 0)
    .removeClass("zoom-top-opened-sidebar")
    .addClass("zoom-top-collapsed");
  } else {
    $("#map .ol-rotate")
    .css("margin-right", $(".sidebar-right").width())
    .removeClass("zoom-top-opened-sidebar")
    .removeClass("zoom-top-collapsed");
  }
}
function isConstrained() {
  return $("div.mid").width() == $(window).width();
}
function applyInitialUIState() {
  if (isConstrained()) {
    $(".sidebar-left .sidebar-body").fadeOut("slide");
    $(".sidebar-right .sidebar-body").fadeOut("slide");
    $(".min-submenu-left").fadeIn();
    $(".min-submenu-right").fadeIn();
  }
}
// init application
$(function() {
  // create map
  var map = new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: [0, 0],
      zoom: 2
    })
  });
});
