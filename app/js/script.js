var d = new Date()
var visibleMonth = d.getMonth()

function getMonthInfo(year, month) {
    var firstDay = new Date(year, month, 1).getDay()
    var daysCount = new Date(year, month + 1, 0).getDate()
    return {
        firstDay: firstDay,
        daysCount: daysCount
    }
}

function getShift(day) {
    if (day == 0) {
        return 6
    } else {
        return day - 1
    }
}

function getShiftWojtek(day) {
    return (day + 6) % 7
}



//------------------------------------------------------------

$(function () {
    var $notes = $(".note")
    
    var notesPositionAbsolute = $notes.first().offset().top;
    var notesParentPosition = $(".main-text").offset().top;
    var notesPosition = notesPositionAbsolute - notesParentPosition;
//    console.log(notesPosition);
//    console.log(notesParentPosition);
    
    
    $("#aside-note").css("top", notesPosition + "px");
    
    //wyświetlanie komentarza
    $.each($notes, function (i, el) {
        var elem = $(el)
        var text = elem.text()

        elem.text(" (" + (i + 1) + ") ")
        $(".aside-note-container").append("<p>" + (i+1) + ". " + text + "</p>")
    })
    
    //koniec wyświetlania komentarza

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

    // początek renderowania miesiąca

    var monthInfo = getMonthInfo(d.getFullYear(), d.getMonth());

    console.log(monthInfo.firstDay);
    console.log(monthInfo.daysCount);

    console.log("dzień ", d.getDay())
    console.log(getShift(monthInfo.firstDay))

    var shiftCount = getShift(monthInfo.firstDay);

    for (var shift = 1; shift <= getShift(monthInfo.firstDay); shift++) {
        $("#calendar").append(" # ");
    }
    for (var fd = 1; fd <= monthInfo.daysCount; fd++) {
        if (fd == d.getDay()) {
            $("#calendar").append(" (" + fd + ") ");
        } else {
            $("#calendar").append(" " + fd + " ");
        }

        if ((shiftCount + fd) % 7 == 0) {
            $("#calendar").append("<br>");
        }
    }

    // koniec renderowania miesiąca




})
