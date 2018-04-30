$(function () {
    'use strict';

    $("#menu-responsive").click(function () {
        $("nav ul li").toggleClass("horizontal-menu")
        $("nav").toggleClass("nav-horizontal-invisible");
    });

    $(window).scroll(function () {
        var position = window.pageYOffset;
        console.log(position);
        if (position > 100) {
            $("#roll-up").css("display", "block");
        } else {
            $("#roll-up").css("display", "none");
        }
        if (position > 800) {
            $("#skill").animate({
                opacity: "1"
            });
        } else {
            $("#skill").animate({
                opacity: "0"
            });
        }
    });

})
