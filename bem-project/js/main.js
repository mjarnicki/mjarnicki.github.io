    'use strict';
    $(function () {
        // header slider
        $('.header-slider').slick({
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: true,
            adaptiveHeight: true
        });

        $('.clients-slider').slick({
            slidesToScroll: 1,
            slidesToShow: 8,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            adaptiveHeight: true,
            responsive: [
                {
                    
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1
                    }
    },{
                    
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
    },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
    },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
        });
    });
