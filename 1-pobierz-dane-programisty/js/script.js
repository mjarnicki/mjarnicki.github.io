    'use strict';
    $("document").ready(function () {


        var ajaxUrl = "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php";

        $("#download").click(function () {

            $.ajax({
                url: ajaxUrl,
                dataType: "json",
                success: function (data) {
                    showText(data);
                },
            })
        });

        function showText(response) {
            var daneProgramisty = "Imię: " + response.imie + ",<br> Nazwisko: " + response.nazwisko + ", <br> Zawód: " + response.zawod + ",<br> Firma: " + response.firma;
            
            $("button").after('<div id="dane-programisty">' + daneProgramisty + '</div>' );
        }

    });
