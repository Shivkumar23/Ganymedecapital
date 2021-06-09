(function ($) {
    "use strict";

    $(document).ready(function () {
        //   Header
        var fixed_top = $(".header");
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 10) {
                fixed_top.addClass(" sticky");
            } else {
                fixed_top.removeClass(" sticky");
            }
        });

        // Preloader
        $(window).on("load", function () {
            $(".Preloader").addClass("loaded");
        });

        // Team Section Slider
        var owl;
        owl = jQuery(".owl-carousel").owlCarousel({
            loop: true,
            autoplay: true,
            autoplaySpeed: 600,
            nav: false,
            dots: false,
            items: 1,
        });
        jQuery(".team-bottom-slide").on("click", "li", function (e) {
            owl.trigger("to.owl.carousel", [jQuery(this).index(), 300]);
        });
    });

    AOS.init();
})(jQuery);
