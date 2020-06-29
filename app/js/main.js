$(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });  
  $('.photo__slider').slick({
    prevArrow: '<button type="button" class="photo__slider-button slick-prev"><img src="images/icons/previous.svg" alt=""></button>',
    nextArrow: '<button type="button" class="photo__slider-button slick-next"><img src="images/icons/next.svg" alt=""></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect:true,
    infinite:false,
  });  
  $('[data-fancybox="images"]').fancybox({
    buttons: [
      "zoom",
      "close"
    ],
  });
});