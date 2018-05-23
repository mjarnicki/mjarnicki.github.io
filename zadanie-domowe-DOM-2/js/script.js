    'use strict';
    $("document").ready(function () {


        $("#oblicz").click(function () {

            $(".biologia").eq(2).addClass("red");

            for (var i = 1; i <= 20; i++) {


                var matematyka = parseInt(($('#uczen' + i + '').find(".matematyka").val()*10))/10;
                var polski = parseInt(($('#uczen' + i + '').find(".polski").val()*10))/10;

                var biologia = parseInt(($('#uczen' + i + '').find(".biologia").val()*10))/10;
                var geografia = parseInt(($('#uczen' + i + '').find(".geografia").val()*10))/10;
                var fizyka = parseInt(($('#uczen' + i + '').find(".fizyka").val()*10))/10;
                var chemia = parseInt(($('#uczen' + i + '').find(".chemia").val()*10))/10;
                var informatyka = parseInt(($('#uczen' + i + '').find(".informatyka").val()*10))/10;

                var dodatkowe = $('#uczen' + i + '').find(".zajecia-dodatkowe").val();
                var dodatkowe_tablica = dodatkowe.split(", ");
                var dodatkowe_tablica_dl = dodatkowe_tablica.length;

                if (dodatkowe_tablica != "") {
                    for (var j = 0; j <= dodatkowe_tablica.length; j++) {
                        var addition = $('#uczen' + i + '').find('.' + dodatkowe_tablica[j] + '');
                        var addition_value = parseInt(addition.val());
                        if (addition.val() != 6)
                            {
                               addition.val(addition_value + 0.5);
                            }
                    };
                };

                var srednia = Math.round(((matematyka + polski + biologia + geografia + fizyka + chemia + informatyka)/7)*100)/100;


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
                
            }
        });
    });
