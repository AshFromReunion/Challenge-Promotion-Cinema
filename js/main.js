// Scroll pour les liens
$('a[href^="#liste-film"], a[href^="#contact"], a[href^="#captain-america"], a[href^="#batman-superman"], a[href^="#londre"], a[href^="#divergente"], a[href^="#panda"],a[href^="#five"],a[href^="#saint-amour"],a[href^="#lady-in-the-van"],a[href^="#boy"],a[href^="body"]').click(function () {
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
$('.datepicker').datepicker({});





// FIXER LE MENU ACCORDEON
var positionElementInPage = $('#accordion').offset().top;


$(window).resize(function () {

    positionElementInPage = $('#accordion').offset().top;
    

});
$(window).scroll(
    function () {
        if ($(window).scrollTop() > positionElementInPage && $(window).width() > 992) {
            // fixed
            $('#accordion').addClass("fixed");
            $('#liste-film').addClass("col-md-offset-2");
            $(".fa-chevron-up").css('visibility', 'visible');
        } else {
            // unfixed
            $('#accordion').removeClass("fixed");
            $('#liste-film').removeClass("col-md-offset-2");
            $(".fa-chevron-up").css('visibility', 'hidden');
        }
    }


);


$('.carousel-film-stop').carousel({
    interval: false
});

$('#myCarousel').carousel({
    interval: 5000
});


