 'use strict';
 $(function () {

     //hide-show top menu 
     $("#menu-responsive").click(function () {
         $("nav ul li").toggleClass("horizontal-menu")
         $("nav").toggleClass("nav-horizontal-invisible");
     });
     //animation of appearing elements
     $(window).scroll(function () {
         var position = window.pageYOffset;

         if (position > 100) {
             $(".roll-up").addClass("roll-up-slide");
         } else {
             $(".roll-up").removeClass("roll-up-slide");
         };

         if (position > 100) {
             $(".about-me").addClass("about-me-slide");
         } else {
             $(".about-me").removeClass("about-me-slide");
         }

         var skillPosition = $(".skill").offset().top - $(".skill").outerHeight();
         if (position > skillPosition) {
             $(".skill").addClass("skill-slide");
         } else {
             $(".skill").removeClass("skill-slide");
         }

     });
     // smooth scrool
     $("[href='#about-me']").click(function () {
         
         $('#portfolio').smoothScroll();
     });

 })
