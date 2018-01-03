$(document).ready(function () {
    $(".navbar-toggler").on('click', function () {
        if ($(".navbar-collapse").hasClass('animated fadeInRight')) {
            $(".navbar-collapse").removeClass('animated fadeInRight').addClass('animated fadeOutRight');
            $(".changing-nav").removeClass('navbar-nav').addClass('nav flex-column');
            $(".navbar-collapse").addClass('to-sidebar');
            $(".menu").html('menu');
            $(".menu").hide().removeClass('animated rotateIn').addClass('animated rotateOut');
            $(".menu").show().removeClass('animated rotateOut').addClass('animated rotateIn');
        } else {
            $(".navbar-collapse").show().removeClass('animated fadeOutRight').addClass('animated fadeInRight');
            $(".changing-nav").removeClass('navbar-nav').addClass('nav flex-column');
            $(".navbar-collapse").addClass('to-sidebar');
            $(".menu").html('arrow_back');
            $(".menu").hide().removeClass('animated rotateIn').addClass('animated rotateOut');
            $(".menu").show().removeClass('animated rotateOut').addClass('animated rotateIn');
        }
    });





});