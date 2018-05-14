    'use strict';
    $("document").ready(function () {

        var tresc_diva = "";

        for (var i = 1; i <= 10000; i++) {
            
            tresc_diva = tresc_diva + '<div class="square"></div>';
        }
        $("#container").html(tresc_diva);

        $(".square").mouseenter(function () {

            $(this).animate({
                backgroundColor: "#B8143A"
            }, 200).animate({
                backgroundColor: "#340913"
            }, 2000);
        })

    });
