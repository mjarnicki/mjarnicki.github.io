    'use strict';
    $("document").ready(function () {

        var square = "";

        for (var i = 1; i <= 7480; i++) {
            
            square = square + '<div class="single-square"></div>';
        }
        $(".squares").html(square);

        $(".single-square").mouseenter(function () {
            $(this).addClass("single-square-color");

        });
        $(".btn-secondary").click(function(){
           
            $(".single-square").removeClass("single-square-color");
        });

    });
