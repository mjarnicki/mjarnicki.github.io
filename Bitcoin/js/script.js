    'use strict';
    $("document").ready(function () {
        $("#sprawdz").on("click", function () {

            function showBitcoin(course) {
                var kupno = course.PLN.buy;
                var sprzedaz = course.PLN.sell;

                var kupnoPoprzednie = $("#kupno").html();
                var sprzedazPoprzednie = $("#sprzedaz").html();

                console.log(kupnoPoprzednie);

                if (kupnoPoprzednie < kupno) {
                    if (kupnoPoprzednie != 0) {
                        $("#znak-kupno").append('<i class="fas fa-arrow-up"></i>');
                    } else if (kupnoPoprzednie == 0) {
                        $("#znak-kupno").html("");
                    }
                } else if (kupnoPoprzednie == kupno) {
                    $("#znak-kupno").html('<i class="fas fa-equals"></i>');
                } else if (kupnoPoprzednie > kupno) {
                    $("#znak-kupno").html('<i class="fas fa-arrow-down"></i>');
                };

                if (sprzedaz > sprzedazPoprzednie) {
                    if (sprzedazPoprzednie != 0) {
                        $("#znak-sprzedaz").append('<i class="fas fa-arrow-up"></i>');
                    } else if (sprzedazPoprzednie == 0) {
                        $("#znak-sprzedaz").html("");
                    }
                } else if (sprzedaz == sprzedazPoprzednie) {
                    $("#znak-sprzedaz").html('<i class="fas fa-equals"></i>');
                } else if (sprzedaz < sprzedazPoprzednie) {
                    $("#znak-sprzedaz").html('<i class="fas fa-arrow-down"></i>');
                };

                $("#kupno").html(kupno);
                $("#sprzedaz").html(sprzedaz);

            };

            $.getJSON("https://blockchain.info/pl/ticker", function (data) {
                showBitcoin(data);
            });
        });
    });
