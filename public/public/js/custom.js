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
      800);
});

$(document).on("click", ".goProduct", function() {
  $('html,body').animate({
      scrollTop: $(".secHomeProduct").offset().top},
      800);
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
$(document).ready(function () {
  AOS.init();

  lightGallery(document.getElementById('lightgallery'),{                
    selector: '.item'
  });
  lightGallery(document.getElementById('video-gallery'));
  lightGallery(document.getElementById('html5-videos'));
 
  $(function(){
    $('.scrollingImg').infiniteslide({
      speed: 50,
      pauseonhover: false
    });
  });

  $('.banner-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    nav:true,
    mouseDrag:false,
    autoplay:false,
    animateOut: 'fadeOut',
    navText: ["<img src='img/banner-arrow.svg' /> Previous","Next <img src='img/banner-arrow.svg' />"],
    items:1
  });

});

$(document).on("click", "button.close", function(e){
  $("#videoModal iframe").attr("src", $("#videoModal iframe").attr("src"));
});


// $("#videoModal").on('hidden.bs.modal', function (e) {
//   alert('test');
//   $("#videoModal iframe").attr("src", $("#videoModal iframe").attr("src"));
// });

window.onload = function () {
  lax.init()
  lax.addDriver('scrollY', function () {
    return window.scrollY
  })
  lax.addElements('.homeCeramic1', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 0, 500],
      ]
    }
  })  
  lax.addElements('.homeCeramic2', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 0, -400],
      ]
    }
  }) 
  lax.addElements('.homeCeramic3', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 0, -600],
      ]
    }
  })
  lax.addElements('.homeCeramic4', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [200, 0, -600],
      ]
    }
  })
  lax.addElements('.homeCeramic5', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 0, 400],
      ]
    }
  })

  lax.addElements('.productLax', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [-50, 0, 100],
      ]
    }
  })


  lax.addElements('.galleryLeftImg', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [250, 20, 350],
      ]
    }
  })
  lax.addElements('.galleryRightImg', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [250, 0, 350],
      ]
    }
  })

  lax.addElements('.aboutBannerLeftImg', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [100, 0, -400],
      ]
    }
  })
  lax.addElements('.aboutBannerRightImg', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [200, 0, 300],
      ]
    }
  })
  lax.addElements('.whyRightImg', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 100, 250],
      ]
    }
  })

  
  lax.addElements('.aboutRightImg', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [-100, 0, 400],
      ]
    }
  })  

  lax.addElements('.missionLeftImg', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [-200, 20, 0],
      ]
    }
  })  

  lax.addElements('.contactBottomLeft', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [-150, 0, -50],
      ]
    }
  })  

  lax.addElements('.contactBottomRight', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [-200, 0, -50],
      ]
    }
  })   

  lax.addElements('.ball-big', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [200, 0, -600],
      ]
    }
  })   

  lax.addElements('.ball-small', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 0, 400],
      ]
    }
  })  

  lax.addElements('.productVideoRightImg', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [-100, 0, 200],
      ]
    }
  })  

  lax.addElements('.faqLeftImg', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 0, 300],
      ]
    }
  })

 

  lax.addElements('.faqBottomImg', {
    scrollY: {
      translateX: [
        ["elInY", "elCenterY", "elOutY"],
        [0, '100', '500'],
      ]
    }
  })

  lax.addElements('.productGalleryRight', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 0, 200],
      ]
    }
  })

 
  lax.addElements('.productImg1', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 0, -200],
      ]
    }
  })
  lax.addElements('.productImg2', {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [-200, 0, 200],
      ]
    }
  })
}