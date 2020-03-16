(function($) {
    $(document).ready(function(){

        $('.sl-slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 2000,
            fade: true,
            cssEase: 'linear',
            // slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true
        });
    });

})( jQuery );

(function($) {
    $(document).ready(function(){

        $('.sl-logo-slide-right').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            cssEase: 'linear',
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
            autoplay: true
        });
    });

})( jQuery );

(function($) {
    $(document).ready(function(){

        $('.sl-logo-slide-left').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            cssEase: 'linear',
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
            // rtl: true
            autoplay: true
        });
    });

})( jQuery );
