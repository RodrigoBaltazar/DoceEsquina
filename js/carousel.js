$(document).ready(function(){
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:4,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:1000,
      smartSpeed: 18001,
      autoplayHoverPause:true,
      responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
          }
        }
      });


owl.trigger('owl.play',1000);

  });
