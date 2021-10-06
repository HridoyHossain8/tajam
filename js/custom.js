$(document).ready(function(){
    //banner-slider
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
    });
    
    //videobox 
    $('.venobox').venobox(); 
    
    //team-slider
    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoPlay: true,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
         },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
         },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
         }
         ]
    });
    
    //testimonial
    $('.tt-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.tm-slide'
    });
    $('.tm-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.tt-slide',
        dots: false,
        arrows: true,
        prevArrow:'.prevs',
        nextArrow:'.next',
        centerMode: true,
        centerPadding:'0px',
        focusOnSelect: true,
        responsive: [ {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding:'0px',
                }
         }
         ]
    });
    
 
    //sticky-top
    $(window).scroll(function(){
        var scrolling=$(this).scrollTop();
        var sticky=$('.sticky-top');
        
        if(scrolling >= 150){
            sticky.addClass('nav-bg');
        }else{
            sticky.removeClass('nav-bg');
        }
     
    });
    
    
    //scrollspy
    $('body').scrollspy({target: ".navbar"})
    
    
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500);
                return false;
            }
        }
    });
    
    
    
    //aos animation
    AOS.init();
    
    //background video
    jQuery("#bgndVideo").YTPlayer();
    
    //typing 
    var typed = new Typed('.animate', {
        strings:["Awesome Creative Agency",
                 "Greate team"
                ],
        typeSpeed:50,
        backSpeed:50,
        loop:true,
    });

    //scroll to top button
    $(window).scroll(function(){
       if($(window).scrollTop() >400){
           $('.top').css({
               "opacity":"1","pointer-events":"auto"
           });  
       }else{
            $('.top').css({
               "opacity":"0","pointer-events":"none"
           });
        } 
    });
    $('.top').click(function(){
        $('html').animate({scrollTop:0}, 400);
    });
    
    //preloader
    $(window).on('load',function(){
        $('.preloader').delay(1500).fadeOut(500);
    });
    
    
 
   
});