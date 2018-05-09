'use strict';
$(function () {

    var no = 0;

    function moveRight(slideNumber) {
        var toRight = "-" + slideNumber * 100 + "%";
        $("#slider").animate({
            "margin-left": toRight
        });
    }

    function moveLeft(slideNumber) {
        var toLeft = "-" + slideNumber * 100 + "%";

        $("#slider").animate({
            "margin-left": toLeft
        });
    }

    $("#forward").click(function () {
        if (no < 3) {
            no++;
            moveRight(no);
        } else {
            no = 0;
            moveRight(no);
        }
    });

    $("#backward").click(function () {
        if (no > 0) {
            no--;
            moveLeft(no);
        } else {
            no = 3;
            moveLeft(no);
        }
    });

});
