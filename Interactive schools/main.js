$(document).ready(function () {

    $(window).bind('scroll', function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 14) {

            $('#main-header').addClass('fixed');
        } else {
            $('#main-header').removeClass('fixed');
        }
    });

    // menu level 1 show
    $("#menu").click(() => {
        $("#mask").show();
        $("#content .menu-level1").addClass('menu-level1-show'); 
    });


    // menu level 1 close.
    $(".menu-level1 .close-menu").click(() => {
        $(".selected").removeClass("selected");
        $("#content .menu-level1").removeClass("menu-level1-show"); 
        $(".children").removeClass("children-show");
        $("#mask").hide();
    })

    // menu level 2 show.
    $(".plus-simbol").click(function () {
        $(".selected").removeClass("selected");
        $(this).parent().parent().addClass("selected");
        $(".children-show").removeClass("children-show");  
        $(this).siblings(":last").addClass("children-show");
    });


    // menu level 2 close.
    $(".close-menu2").click(function(e) {
        e.stopPropagation();
        $(".selected").removeClass("selected");
        $(this).parent().removeClass("children-show");
    });

    //contact btn
    $("#contact-button").click(function() {
            $(this).parent().toggleClass("show");
    });


})