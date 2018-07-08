var d = new Date()
var currentMonth = d.getMonth()
var currentYear = d.getFullYear()

var monthArray = ["january", "february", "march", "april", "may", "jun", "july", "april", "september", "october", "november", "december"];



function getMonthInfo(year, month) {
    var firstDay = new Date(year, month, 1).getDay()
    var daysCount = new Date(year, month + 1, 0).getDate()
    return {
        firstDay: firstDay,
        daysCount: daysCount
    }
}


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

    $("#right").click(function () {
        currentMonth++;
        console.log(currentMonth);
    })
    
     $("#left").click(function () {
        currentMonth--;
        console.log(currentMonth);
    })

    // początek renderowania miesiąca
    
    $("#month").text(monthArray[currentMonth]);
    
    var monthInfo = getMonthInfo(currentYear, 0);

    for (var shift = 0; shift < monthInfo.firstDay; shift++) {
        $("#month-days").append('<div class="day-container"><div class="day"></div></div>');
    }

    for (var fd = 1; fd <= monthInfo.daysCount; fd++) {
        $('#month-days').append('<div class="day-container"><div class="day" id="' + fd + '">' + fd + '</div></div>');
    };

    for (var ia = 1; ia < d.getDate(); ia++) {
        $("#" + ia + "").addClass("inactive").removeClass("day");
    }

    $("#" + d.getDate() + "").addClass("current");

    $('.day').click(function () {
        $('.day').removeClass("current")
        $(this).toggleClass('current');
    });



    //+ currentYear + "." + (currentMonth +1 ) + "." 
    // + currentYear + "." + (currentMonth +1 ) + "."


})
