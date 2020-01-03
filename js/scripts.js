/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */

(function ($, Drupal) {
    
    $(document).ready(function() {
    // Drupal core toolbar module sets the padding-top initially. 
    // But this doesn't work with mini admin toolbar, so handle here.
    function toolbarOffset() { 
      // First get height of toolbar and tray. 
      var $toolbar_barHeight = $(".toolbar-bar");
      var $toolbar_trayHeight = $(".toolbar-tray");
      var barHeight = $toolbar_barHeight.outerHeight();
      var trayHeight= $toolbar_trayHeight.outerHeight();
      var fullBarHeight = barHeight + trayHeight;

      if (window.matchMedia('(min-width: 610px)').matches) {
        // And only do this when logged in of Course... 
        if ($('.toolbar-themes').length && ($('.toolbar-tray.is-active').length)) {
          // Both bar and tray showing
          $('body').css({'padding-top': fullBarHeight+ 'px'});
        } else if ($('.toolbar-themes').length) {
          // Just the bar is showing
          $('body').css({'padding-top': barHeight + 'px'});
        }
    } else {
      // On small devices toolbar is position: relative - so do nothing.
    }
    };

    // Call the function now, and on resize:
    toolbarOffset();
    $(window).on('resize', toolbarOffset);

});

})(jQuery, Drupal);