    'use strict';
    $("document").ready(function () {
        var ile = 0;

        $("#oblicz").click(function () {
            if (ile <= 1) {
                oblicz();
            }
            ile++;
        });


        function oblicz() {

            for (var i = 1; i <= 20; i++) {
                var matematyka = parseFloat($('#uczen' + i + '').find(".matematyka").val());
                var polski = parseFloat($('#uczen' + i + '').find(".polski").val());
                var biologia = parseFloat($('#uczen' + i + '').find(".biologia").val());
                var geografia = parseFloat($('#uczen' + i + '').find(".geografia").val());
                var fizyka = parseFloat($('#uczen' + i + '').find(".fizyka").val());
                var chemia = parseFloat($('#uczen' + i + '').find(".chemia").val());
                var informatyka = parseFloat($('#uczen' + i + '').find(".informatyka").val());

                var dodatkowe = $('#uczen' + i + '').find(".zajecia-dodatkowe").val();
                var dodatkowe_tablica = dodatkowe.split(", ");
                var dodatkowe_tablica_dl = dodatkowe_tablica.length;

                if (dodatkowe_tablica != "") {
                    for (var j = 0; j <= dodatkowe_tablica.length; j++) {
                        var addition = $('#uczen' + i + '').find('.' + dodatkowe_tablica[j] + '');
                        var addition_value = parseFloat(addition.val());
                        if (addition.val() != 6) {
                            addition.val(addition_value + 0.5);
                        }
                    };

                    var srednia = Math.round(((matematyka + polski + biologia + geografia + fizyka + chemia + informatyka) / 7) * 100) / 100;

                    if (srednia >= 4.75) {
                        $('#uczen' + i + '').addClass("good");
                    } else {
                        $('#uczen' + i + '').removeClass("good");
                    };

                    if ((matematyka == 1) || (polski == 1) || (biologia == 1) || (geografia == 1) || (fizyka == 1) || (chemia == 1) || (informatyka == 1)) {
                        $('#uczen' + i + '').addClass("bad");
                    } else {
                        $('#uczen' + i + '').removeClass("bad");
                    };

                    $('#uczen' + i + '').find(".srednia").html(srednia);

                };
            };
        };

    });
