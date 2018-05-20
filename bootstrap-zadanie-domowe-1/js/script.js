    'use strict';
$("document").ready(function(){
    
//     var scroll = new SmoothScroll("a");

        $(window).scroll(function () {
            var position = window.pageYOffset;
            
            if (position != 0) {
                $("#main-nav").addClass("bgc-color-change");
            } else {
                $("#main-nav").removeClass("bgc-color-change");
            };

        });
    
    
});