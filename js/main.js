$(function(){

    $('.header-slider').slick({
        arrows: false,
        fade:true,
        autoplay: true,
        autoplaySpeed: 3500,
        dots: true
    });

    $('.products-slider').slick({
        prevArrow: '.products-slider__prev',
        nextArrow: '.products-slider__next',
        autoplay: true,
        autolaySpeed: 3000,
    });

    $('a').on('click', function (e) {
        e.preventDefault();
    })
  

    // menu scroll

    $("body").on('click', '.menu__list a', function(e){
    var fixed_offset = 50;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
    });

    $("body").on('click', '.footer-wrapper__menu-list a', function(e){
    var fixed_offset = 50;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
    });

    $("body").on('click', '.down-scroll a', function(e){
    var fixed_offset = -100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
    });

    
    

});




