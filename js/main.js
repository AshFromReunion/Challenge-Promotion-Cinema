 // Scroll pour les liens
 $('a[href^="#sectionDroite"], a[href^="#contact"], a[href^="#captain-america"], a[href^="#batman-superman"], a[href^="#londre"], a[href^="#divergente"], a[href^="#panda"],a[href^="#five"],a[href^="#saint-amour"],a[href^="#lady-in-the-van"],a[href^="#boy"],a[href^="body"]').click(function () {
     var the_id = $(this).attr("href");

     $('html, body').animate({
         scrollTop: $(the_id).offset().top
     }, 'slow');
     return false;
 });


 //MENU ACCORDEON  
 $(function () {
     $("#accordion").accordion({
         collapsible: true,
         active: false,

     });
 });

 //DATE PICKER
 /*  $('.datepicker').datepicker({
       //   minDate:-0, maxDate: "+10D",
       onSelect: function (dateText, inst) {
           alert(dateText);
       }
   }); */


 // FIXER LE MENU ACCORDEON
 var positionElementInPage = $('#menuGauche').offset().top;
 var positionNavAccordeon = $('#navAccordeon').offset().top;

 $(window).resize(function () {
     positionElementInPage = $('#menuGauche').offset().top;
     positionNavAccordeon = $('#navAccordeon').offset().top;
 });

 $(window).scroll(
     function () {
         if ($(window).scrollTop() > positionElementInPage - 5) {
             // fixed
             $(".fa-chevron-up").css('visibility', 'visible');

             if ($(window).width() > 991) {
                 $('#menuGauche').addClass("fixed");
                 $('#sectionDroite').addClass("col-md-offset-3");
             }
         } else {
             // unfixed
             $(".fa-chevron-up").css('visibility', 'hidden');
             $('#menuGauche').removeClass("fixed");
             $('#sectionDroite').removeClass("col-md-offset-3");
         }
     }
 );

 $(window).scroll(
     function () {
         if ($(window).scrollTop() > positionNavAccordeon) {
             if ($(window).width() < 992) {
                 $('#navAccordeon').addClass("fixed");
             }
         } else {
             $('#navAccordeon').removeClass("fixed");
         }
     }
 );


 //STOPER LES CAROUSELS SECONDAIRES
 $('.carousel-film-stop').carousel({
     interval: false
 });


 $('#myCarousel').carousel({
     interval: 5000
 });





 var films = ["Captain America", "Batman V Superman : l'aube de la justice", "Five", "The Boy", "La chute de Londres", "Saint Amour", "The Lady in the Van", "Kung fu Panda", "Divergente 3 : Au-delà du mur"];

 var horaires = ["10h30", "14h10", "16h25", "18h50", "21h10"];

 function hasardFilm() {
     var nbAlea = Math.floor(Math.random() * films.length);
     return nbAlea;
 }



 //DATE PICKER

 $('#programme').hide();
 $('#pageInactive').hide();


 $('.datepicker').datepicker({



     //   minDate:-0, maxDate: "+10D",

     onSelect: function (dateText, inst) {


         for (var i = 0; i < 10; i++) {
             var position = hasardFilm();
             this["seance" + i] = films[position];
             films.splice(position, 1);
         }

         $('#programme').fadeIn("slow");
         $('#pageInactive').show();
         $('#jour').html(dateText);
         $('#horaires').html("<li>" + horaires[0] + "</li><li>" + horaires[1] + "</li><li>" + horaires[2] + "</li><li>" + horaires[3] + "</li><li>" + horaires[4] + "</li>");
         $('#seanceSalle1').html("<li>" + this.seance0 + "</li><li>" + this.seance1 + "</li><li>" + this.seance2 + "</li><li>" + this.seance3 + "</li><li>" + this.seance4 + "</li>");
         $('#seanceSalle2').html("<li>" + this.seance5 + "</li><li>" + this.seance6 + "</li><li>" + this.seance7 + "</li><li>" + this.seance8 + "</li><li>" + this.seance1 + "</li>");


         films = ["Captain America", "Batman V Superman : l'aube de la justice", "Five", "The Boy", "La chute de Londres", "Saint Amour", "The Lady in the Van", "Kung fu Panda", "Divergente 3 : Au-delà du mur"];

         $('section').css('filter', 'blur(2px)');
         $('#myCarousel').css('filter', 'blur(2px)');
         $('nav').css('filter', 'blur(2px)');






     }




 });


 $('.fa-times-circle-o').click(function () {
     $('section').css('filter', 'none');
     $('#myCarousel').css('filter', 'none');
     $('nav').css('filter', 'none');
     $('#programme').fadeOut("slow");
     $('#pageInactive').hide();


 });