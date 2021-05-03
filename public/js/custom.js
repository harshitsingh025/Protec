$(window).scroll(function(){
  if($(window).scrollTop()>=200){
    $('.car-top').addClass("show");
    $('.car-top').addClass("car-down")
  }
  else {
    $('.car-top').removeClass("show");
    setTimeout(function(){
      $('.car-top').removeClass('car-down')
    },300)
  }
});
$(document).on("click", ".car-top", function() {
  $('html,body').animate({scrollTop:0},800);
  $(this).addClass("car-run");
  setTimeout(function(){
    $('.car-top').removeClass('car-run')
  },1000);  
  return!1 
});

$(document).on("click", ".goSection", function() {
  $('html,body').animate({
      scrollTop: $(".secHomeAbout").offset().top},
      'slow');
});

$(window).scroll(function() { 
      $('.counting').each(function() {
          var $this = $(this),
          countTo = $this.attr('data-count');
          $({ countNum: $this.text()}).animate({
              countNum: countTo
          },
          {
              duration: 5000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
              }
          });  
      });
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else {
    $('header').removeClass("sticky");
  }
});


// $(document).ready(function () {
//   var owl = $('.client-carousel');
//   owl.owlCarousel({
//       items: 8,
//       loop: true,
//       margin: 20,
//       autoplay: true,
//       slideTransition: 'linear',
//       autoplayTimeout: 0,
//       autoplaySpeed: 3000,
//       autoplayHoverPause: true
//   });

// });

$(function(){
  $('.scrollingImg').infiniteslide({
    speed: 50,
    pauseonhover: false
  });
});


$(document).ready(() => {
  lightGallery(document.getElementById('lightgallery'),{                
    selector: '.item'
  });
});



