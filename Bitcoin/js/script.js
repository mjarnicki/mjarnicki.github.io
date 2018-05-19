    'use strict';
    $("document").ready(function () {
        $("#sprawdz").on("click", function () {

            function showBitcoin(course) {
                var kupno = Math.round(course.PLN.buy * 100)/100;
                var sprzedaz = Math.round(course.PLN.sell * 100)/100;

                var kupnoPoprzednie = $("#kupno").html();
                var sprzedazPoprzednie = $("#sprzedaz").html();

                console.log(kupnoPoprzednie);

                if (kupnoPoprzednie < kupno) {
                    if (kupnoPoprzednie != 0) {
                        $("#znak-kupno").html('<i class="fas fa-arrow-up"></i>');
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
                        $("#znak-sprzedaz").html('<i class="fas fa-arrow-up"></i>');
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
