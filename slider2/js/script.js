'use strict';
$(function () {

    var slideNo = 0;

    function moveDown(slideNumber) {
        var toDown = "-" + slideNumber * 100 + "vh";
        $("#slider").animate({
            "margin-top": toDown
        });
    }

    function moveUp(slideNumber) {
        var toUp = "-" + slideNumber * 100 + "vh";

        $("#slider").animate({
            "margin-top": toUp
        });
    }

    $("#down").click(function () {
        if (slideNo < 3) {
            slideNo++;
            moveDown(slideNo);
        } else {
            slideNo = 0;
            moveDown(slideNo);
        }
    });

    $("#up").click(function () {
        if (slideNo > 0) {
            slideNo--;
            moveUp(slideNo);
        } else {
            slideNo = 3;
            moveUp(slideNo);
        }
    });

});
