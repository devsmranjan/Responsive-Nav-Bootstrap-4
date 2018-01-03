$(document).ready(function() {
        $(".navbar-toggler").on('click', function() {
          if($(".navbar-collapse").hasClass('animated fadeInLeft')) {
            $(".navbar-collapse").removeClass('animated fadeInLeft').addClass('animated fadeOutLeft');
            $(".changing-nav").removeClass('navbar-nav').addClass('nav flex-column');
            $(".navbar-collapse").addClass('to-sidebar');
            $(".menu").html('menu');
            $(".menu").hide().removeClass('animated rotateIn').addClass('animated rotateOut');
            $(".menu").show().removeClass('animated rotateOut').addClass('animated rotateIn');
          } else {
            $(".navbar-collapse").show().removeClass('animated fadeOutLeft').addClass('animated fadeInLeft');
            $(".changing-nav").removeClass('navbar-nav').addClass('nav flex-column');
            $(".navbar-collapse").addClass('to-sidebar');
            $(".menu").html('arrow_back');
            $(".menu").hide().removeClass('animated rotateIn').addClass('animated rotateOut');
            $(".menu").show().removeClass('animated rotateOut').addClass('animated rotateIn');
          }
        });





      });