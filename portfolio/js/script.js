 'use strict';
 $(function () {

     //hide-show top menu 
     $("#menu-responsive").click(function () {
         $("#header-container #main-nav ul li ").toggleClass("horizontal-menu")
         $("nav").toggleClass("nav-horizontal-invisible");
     });
     //smooth scrool plugin
     var scroll = new SmoothScroll("a");
     
     //animation of appearing elements
     $(window).scroll(function () {
         var position = window.pageYOffset;

         if (position > 100) {
             $(".roll-up").addClass("roll-up-slide");
         } else {
             $(".roll-up").removeClass("roll-up-slide");
         };

         if (position > 100) {
             $("#about-me").addClass("about-me-slide");
         } else {
             $("#about-me").removeClass("about-me-slide");
         }

         var skillPosition = $(".skill").offset().top - $(".skill").outerHeight();
         if (position > skillPosition) {
             $(".skill").addClass("skill-slide");
         } else {
             $(".skill").removeClass("skill-slide");
         }
         
         var portfolioPosition = $(".portfolio-icons-container").offset().top - $(".portfolio-icons-container").outerHeight();
         if (position > portfolioPosition){
            $("#icon1").addClass("portfolio-slide-1");
            $("#icon2").addClass("portfolio-slide-2");
            $("#icon3").addClass("portfolio-slide-3");
         }
         else{
            $("#icon1").removeClass("portfolio-slide-1");
            $("#icon2").removeClass("portfolio-slide-2");
            $("#icon3").removeClass("portfolio-slide-3");
         }
     });

 });
