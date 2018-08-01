var d = new Date()
var currentMonth = d.getMonth()
var currentYear = d.getFullYear()

var monthArray = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
var weekArray = ["S", "M", "T", "W", "T", "F", "S"]



//------------------------------------------------------------

$(function () {

    //    pozycja komentarza na marginesie
    var $notes = $(".note")

    var notesPositionAbsolute = $notes.first().offset().top;
    var notesParentPosition = $(".main-text").offset().top;
    var notesPosition = notesPositionAbsolute - notesParentPosition;




    $("#aside-note").css("top", notesPosition + "px");

    //wyświetlanie komentarza na marginesie
    $.each($notes, function (i, el) {
        var elem = $(el)
        var text = elem.text()

        elem.text(" (" + (i + 1) + ") ")
        $(".aside-note-container").append("<p>" + (i + 1) + ". " + text + "</p>")
    })

    //wyświetlanie dodatkowego komentarza 

    var $aside = $(".aside");

    $.each($aside, function (i, el) {
        var elem = $(el);
        var asideText = elem.text();
        var title = asideText.split(" ")[0];
        var text = asideText.substr(asideText.indexOf(" ") + 1);

        elem.text("");
        elem.append('<div class="main-aside"><div class="aside-comment"><h2>' + title + '</h2><div class="blue-line"></div>             <p>' + text + '</p></div></div>');
    });



    //    zmiana miesiąca do przodu
    $("#right").click(function () {
        currentMonth++;
        $(".week-day").remove();
        $(".day-container").remove();
        otherMonth();
    })
    //zmiana miesiąca wstecz
    $("#left").click(function () {
        currentMonth--;
        $(".week-day").remove();
        $(".day-container").remove();
        otherMonth();
    })

    //"łapanie" dnia tygodnia pierwszego dnia miesiąca i ilości dni w miesiacu
    function getMonthInfo(year, month) {
        var firstDay = new Date(year, month, 1).getDay()
        var daysCount = new Date(year, month + 1, 0).getDate()
        return {
            firstDay: firstDay,
            daysCount: daysCount
        }
    }

    // renderowanie miesiąca
    function otherMonth() {
        var monthInfo = getMonthInfo(currentYear, currentMonth);

        //      wpisywanie nazwy miesiąca
        $("#month").text(monthArray[currentMonth]);

        //      wpisywanie opisów dni tygodnia
        for (var wd = 0; wd <= 6; wd++) {
            $("#month-days").append('<div class="week-day"><div class="name">' + weekArray[wd] + '</div></div>');
        }

        //      wypisywanie "pustych" dni
        for (var shift = 0; shift < monthInfo.firstDay; shift++) {
            $('#month-days').append('<div class="day-container"><div class="inactive"></div></div>');
        }
        //      generowanie dni miesiąca
        for (var fd = 1; fd <= monthInfo.daysCount; fd++) {
            $('#month-days').append('<div class="day-container active"><div class="day">' + fd + '</div></div>');
        };

        //      zaznaczanie poprzednich dni

        //        w obecnym miesiącu
        if (d.getMonth() == currentMonth) {
            for (var ia = 0; ia < (d.getDate() - 1); ia++) {
                $(".day-container").eq((ia)).addClass("inactive").removeClass("active");
                //                zaznaczanie aktualnego dnia
                $(".day-container").eq(d.getDate() - 1).addClass("current");
            }
        }
        //        w poprzednich miesiącach
        else if (d.getMonth() > currentMonth) {
            $(".day-container").addClass("inactive").removeClass("active");
        }

        //          zaznaczanie innego dowolnego dnia
        $('.active').click(function () {
            $('.day-container').removeClass("current")
            $(this).toggleClass('current');
        });


        $.ajax({
            url: "https://mjarnicki.github.io/app/api/calendar",
            dataType: "json",
            success: function (response) {

                for (var i = 0; i < response.length; i++) {

                    if ((response[i].month - 1) == currentMonth) {
                        $('.day-container').eq(response[i].day + monthInfo.firstDay - 1).removeClass("active").append('<div class="circle"></div>');
                    }
                }
            }
        })

        function hotels(hotelList) {
            var hotelNames = hotelList.split(",");
            var hotelNumber = hotelNames.length;
            var listElement = 0;
            $("#hotel > option").remove();
            for (var i = 0; i < hotelNumber; i++) {
                listElement += $("#hotel").append(listElement += "<option>" + hotelNames[i] + "</option>");
            }
            return listElement;
        }

        $("#city").change(function () {
            var selectedCity = "#city > option:selected";


            if ($(selectedCity).text() == "Oslo") {

                hotels("Grand Hotel,Cab Inn,Holiday Inn");

            } else if ($(selectedCity).text() == "Bergen") {

                hotels("Bergen Otel,Candle Keep,Bouncing Pony");

            } else if ($(selectedCity).text() == "Trontheim") {

                hotels("Trontheim Apartments,Lonely Dragon,Hogsmeade");

            } else if ($(selectedCity).text() == "Bodo") {

                hotels("Bodo Cheap Rooms,Hostel Exclusive");
            }
        })

    }

    otherMonth();
    
    $(".submit").click(function(){
        
        console.log(JSON.stringify({
        "e-mail": $("#email").val(),
        "city": $("#city > option:selected").text(),
        "hotel": $("#hotel > option:selected").text(),
        "month": (currentMonth + 1),
        "day": $(".current").text()
  }))

})
    
    


    
    //    $("#check").click(function () {
    //        console.log($(".current").text() + "." + (currentMonth + 1))
    //    });

})
