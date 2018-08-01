    'use strict';
    $("document").ready(function () {


        $("#hamburger").click(function () {
            $(".menu").toggleClass("show-menu");
            $(".wrapper").toggleClass("col-10");
            
            $("#line-1").toggleClass("line-1-activated");
            $("#line-3").toggleClass("line-1-activated");
            $("#line-2-right").toggleClass("line-2-right-activated");
            $("#line-2-left").toggleClass("line-2-left-activated");

        });
        // Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

    });
