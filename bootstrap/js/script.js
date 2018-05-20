    'use strict';
    $("document").ready(function () {

        var scroll = new SmoothScroll("a");

        $(window).scroll(function () {
            var position = window.pageYOffset;

            if (position != 0) {
                $("#main-nav").addClass("bgc-color-change");
            } else {
                $("#main-nav").removeClass("bgc-color-change");
            };

        });
    });

//    funkcja do płynnego przewijania napisana w czystym jQuery
//
//    $("a").click(function (e) {
//
//        $("html, body").animate({
//            scrollTop: $(this.hash).offset().top
//        }, 500);
//
//    });
