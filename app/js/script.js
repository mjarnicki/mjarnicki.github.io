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

    $.ajax({
        url: "http://localhost/projekt/app/api/calendar",
        dataType: "json",
        success: function (response) {
            console.log(response);
        },
    })

//    zmiana miesiąca do przodu
    $("#right").click(function () {
        currentMonth++;
        $(".day-container").remove();
        otherMonth();
    })
//zmiana miesiąca wstecz
    $("#left").click(function () {
        currentMonth--;
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
            $("#month-days").append('<div class="day-container"><div class="name">' + weekArray[wd] + '</div></div>');
        }

        //      wypisywanie "pustych" dni
        for (var shift = 0; shift < monthInfo.firstDay; shift++) {
            $("#month-days").append('<div class="day-container"><div class="day"></div></div>');
        }
        //      generowanie dni miesiąca
        for (var fd = 1; fd <= monthInfo.daysCount; fd++) {
            $('#month-days').append('<div class="day-container"><div class="day" id="' + fd + '">' + fd + '</div></div>');
        };
        
        //      zaznaczanie poprzednich dni
        
//        w obecnym miesiącu
        if (d.getMonth() == currentMonth) {
            for (var ia = 1; ia < d.getDate(); ia++) {
                $("#" + ia + "").addClass("inactive").removeClass("day");
//                zaznaczanie aktualnego dnia
                $("#" + d.getDate() + "").addClass("current");
            }
        }
//        w poprzednich miesiącach
        else if (d.getMonth() > currentMonth)
        {
            $(".day").addClass("inactive").removeClass("day");
        }
      
        
//          zaznaczanie innego dowolnego dnia
        $('.day').click(function () {
            $('.day').removeClass("current")
            $(this).toggleClass('current');
        });
    }

    otherMonth();

})
