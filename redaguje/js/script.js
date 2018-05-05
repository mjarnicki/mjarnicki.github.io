   'use strict';
   $("#stona").on("click", function () {
       $("article").load()
   });

   $("#oferta").on("click", function () {
       $("article").load("ajax/oferta.html");
   });

   $("#o-mnie").on("click", function () {
       $("article").load()
   });

   $("#kontakt").on("click", function () {
       $("article").load()
   });
