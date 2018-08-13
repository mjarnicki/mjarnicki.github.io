function initMap() {
    var warsaw = {
        lat: 52.22,
        lng: 21.00
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: warsaw
    });
    var marker = new google.maps.Marker({
        position: warsaw,
        map: map
    });
}
$(function () {
    //logo menu
    function menuLogo() {
        if (window.innerWidth < 992) {
            $("#logo-menu-big").css("display", "none");
            $("#logo-menu-small").css("display", "block");
        } else {
            $("#logo-menu-big").css("display", "block");
            $("#logo-menu-small").css("display", "none");
        }
    }
    menuLogo();

    $(window).resize(function () {
        menuLogo();
    });

    //    change size of logo menu when scrolling
    $(window).scroll(function () {
        if (window.pageYOffset > 600) {
            $(".navbar-nav").css("height", "80px");
            $("#logo-menu-big").css("height", "80px");
        } else {
            $(".navbar-nav").css("height", "120px");
            $("#logo-menu-big").css("height", "120px");
        };
    });


    //address-container height changer depending on screen width
    var singleAddressHeight = 0;

    function listContainerHeight() {
        singleAddressHeight = $(".single-address").outerHeight() * 4;
        $("#address-list-container").outerHeight(singleAddressHeight);
    }
    listContainerHeight();

    $(window).resize(function () {
        listContainerHeight();
    });
    //    address slider

    var slideNo = 0;

    function moveDown(slideNumber) {
        var toDown = "-" + slideNumber * singleAddressHeight + "px";
        $("#address-list").animate({
            "margin-top": toDown
        });
    }

    function moveUp(slideNumber) {
        var toUp = "-" + slideNumber * singleAddressHeight + "px";

        $("#address-list").animate({
            "margin-top": toUp
        });
    }

    $("#down").click(function () {
        if (slideNo < 2) {
            slideNo++;
            moveDown(slideNo);
        }

    });

    $("#up").click(function () {
        if (slideNo > 0) {
            slideNo--;
            moveUp(slideNo);
        }
    });
});
