jQuery(document).ready(function($) {
    "use strict"

    // home slider js
    $('.homeslider').owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        autoplayTimeout: 5000,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        navSpeed: 100,
    });


    ;

    // video pop up js

    $('.video-btn').magnificPopup({
        type: 'video'
    });


    // counter up js

    $(".count").counterUp({
        delay: 10,
        time: 1500
    })

    // search form js

    $(".search-trigger").on("click", function() {
        $(".search-bar-wrap").addClass("search-overlay");
    });

    $(".menu-close").on("click", function() {
        $(".search-bar-wrap").removeClass("search-overlay");
    });
    // search form js

    // Color switcher

    $('.open-switcher').on('click', function(e){
        e.preventDefault()
        $('.switcher-box').toggleClass('open');
    });

    

    var changethecolor = $(".colors-list li a");

    changethecolor.on('click', function(e){
        e.preventDefault()
        var style = $(this).attr('rel');
         $("#colorchange").attr('href', style);
     });


    // Color switcher

});

    // Preloader Js Start

    $(window).on("load", function(e) {
        $("#preloader").fadeOut();
    });
