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
$('.datepicker').datepicker({
   
//   minDate:-0, maxDate: "+10D",
    
    onSelect: function (dateText, inst) {
        alert(dateText);
    }
    
 
    
    

});






// FIXER LE MENU ACCORDEON
var positionElementInPage = $('#menuGauche').offset().top;


$(window).resize(function () {

    positionElementInPage = $('#menuGauche').offset().top;


});
$(window).scroll(
    function () {
        if ($(window).scrollTop() > positionElementInPage-5) {
            // fixed
            $(".fa-chevron-up").css('visibility', 'visible');
            
            if($(window).width() > 992){
            $('#menuGauche').addClass("fixed");
            $('#sectionDroite').addClass("col-md-offset-2");
            }
        } else {
            // unfixed
            $(".fa-chevron-up").css('visibility', 'hidden');
            
            
            $('#menuGauche').removeClass("fixed");
            $('#sectionDroite').removeClass("col-md-offset-2");
            
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










