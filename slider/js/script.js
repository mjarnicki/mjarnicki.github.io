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
                if ((no >= 0) && (no < 4)){
                $("#forward").click(function () {
                    no++;
                    moveRight(no);
                    console.log(no);
                });
                };
    
                $("#backward").click(function () {
                    no--;
                    moveLeft(no);
                    console.log(no);
                });
                
            });
