// Initialise FlexSlider for Carousels
$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        // controlNav: "thumbnails",
        directionNav: true,
        slideshowSpeed: 5000,
        animationSpeed: 600,
        touch: true,
        start: function (slider) {
            $('body').removeClass('loading');
        }
    });
});
