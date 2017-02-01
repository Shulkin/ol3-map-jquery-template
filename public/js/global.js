define([
  "jquery"
], function($) {
  return {
    isConstrained: function() {
      return $("div.middle").width() == $(window).width();
    },
    applyInitialUIState: function() {
      // on initial application state
      if (this.isConstrained()) {
        // show sidebars
        $(".sidebar-left .sidebar-body").fadeOut("slide");
        $(".sidebar-right .sidebar-body").fadeOut("slide");
        // hide minimized icons
        $(".mini-submenu-left").fadeIn();
        $(".mini-submenu-right").fadeIn();
      }
      // update scrollbars
      this.updatePerfectScrollbar();
    },
    applyMargins: function() {
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
    },
    updatePerfectScrollbar: function() {
      // update perfect scrollbar in all panels
      $(".panel-body").perfectScrollbar("update");
      $("#navbar-body").perfectScrollbar("update");
    },
    createHandlers: function() {
      // on collapse content in sidebar panel
      $(".panel-collapse").on("hidden.bs.collapse", this.applyMargins);
      // on expand content in sidebar panel
      $(".panel-collapse").on("shown.bs.collapse", this.applyMargins);
      // calculate margins for openlayers3 controls on window resize
      var self = this;
      $(window).on("resize", function() {
        self.applyMargins();
        self.updatePerfectScrollbar();
      });
    }
  }
});
