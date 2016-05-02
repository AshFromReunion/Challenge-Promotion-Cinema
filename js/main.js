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


        } else {
            // unfixed
            $('#accordion').removeClass("fixed");
            $('#liste-film').removeClass("col-md-offset-2");
        }
    }

);