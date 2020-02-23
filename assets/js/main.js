// template name : Merit College- bootstrap 4 html5 Education Template.
(function ($) {
"use strict";

        // preloader
        $('.loader').fadeOut(1000);
        // mobile menu 
        $('#mobile_menu').meanmenu({
          meanScreenWidth: "767",
          meanMenuContainer: '.mobile_menu'
        });
        // Menu js for Position fixed
        $(window).scroll(function(){
            var window_top = $(window).scrollTop() + 1; 
            if (window_top > 300) {
                $('.header').addClass('menu_fixed animated fadeInDown');
            } else {
                $('.header').removeClass('menu_fixed animated fadeInDown');
            }
        });
        // hero slider 
	    function mainSlider() {
	        var BasicSlider = $('.slider-active');
	        BasicSlider.on('init', function(e, slick) {
	            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
	            doAnimations($firstAnimatingElements);
	        });
	        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
	            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
	            doAnimations($animatingElements);
	        });
	        BasicSlider.slick({
	            autoplay: false,
	            autoplaySpeed: 10000,
              dots: true,
              slidesToShow: 1,
	            fade: false,
	            arrows:false,
	            responsive: [
	                { breakpoint: 767, settings: { dots: false, arrows: false } }
	            ]
	        });
          // for slider animation
	        function doAnimations(elements) {
	            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	            elements.each(function() {
	                var $this = $(this);
	                var $animationDelay = $this.data('delay');
	                var $animationType = 'animated ' + $this.data('animation');
	                $this.css({
	                    'animation-delay': $animationDelay,
	                    '-webkit-animation-delay': $animationDelay
	                });
	                $this.addClass($animationType).one(animationEndEvents, function() {
	                    $this.removeClass($animationType);
	                });
	            });
	        }
	    }
      mainSlider();
      
    
        // client testimonial slider
        $(".testimonial__slider-active").slick({
            autoplay: false,
            dots: true,
            pauseOnHover: false,
            slidesToShow: 5,
            arrows: false,
        });
        // brand slider
        $(".brand__active").slick({
            autoplay: true,
            dots: false,
            pauseOnHover: false,
            slidesToShow: 4,
            arrows: false,
        });
        // Smooth scrolling using jQuery easing
        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $('a.js-scroll-trigger').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
        });

        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').click(function() {
          $('.mean-nav').collapse('hide');
        });

        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
          target: '#mainNav',
          offset: 56
        });       
      //popup gallery
      $('a[data-rel^=lightcase]').lightcase();

    // get footer Current year
    jQuery(window).on("load",function($){
      document.getElementById("year").innerHTML = new Date().getFullYear();
    });

})(jQuery);