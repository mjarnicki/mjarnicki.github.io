   'use strict';
   $("#stona").on("click", function () {
       $("article").load(("ajax/strona.html"))
   });

   $("#oferta").on("click", function () {
       $("article").load("ajax/oferta.html");
   });

   $("#o-mnie").on("click", function () {
       $("article").load("ajax/o-mnie.html")
   });

   $("#kontakt").on("click", function () {
       $("article").load("ajax/kontakt.html")
   });
