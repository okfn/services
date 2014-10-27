$(document).ready(function() {
  
  
  
  //mmenu
  $("#mmenu").mmenu({
     offCanvas: {
        position: "right",
     }
  });
      
      
  //waypoint
  $('body').waypoint(function(direction) {
    if (direction === 'down') {
      $('body').addClass('scrolled');
    }
    else {
      $('body').removeClass('scrolled');
    }
  }, 
  { 
    offset: -30 
  });
  
  //Stellar
  $.stellar({
    horizontalScrolling: false,
    hideDistantElements: false,
  });

  
  //smooth scroll
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top -80
          }, 1000);
          return false;
        }
      }
    });
  });
  
  
  //home
  
  //slick
  $('.home .people').slick({
	  //autoplay: true,
    arrows: false,
	});
  
  $('body').waypoint(function(direction) {
    if (direction === 'down') {
      $('.home .people').slickPause();
      $('.home .people').addClass('dim');
      $('.home .banner .text').addClass('dim');
    }
    else {
      //$('.home .people').slickPlay();
      $('.home .people').removeClass('dim');
      $('.home .banner .text').removeClass('dim');
    }
  }, 
  { 
    offset: -30 
  });
  
  
  //banner
  $('.banner').waypoint(function(direction) {
    if (direction === 'down') {
      $('.home .ckan').addClass('hidden');
    }
    else {
      $('.home .ckan').removeClass('hidden fade');
    }
  }, 
  { 
    offset: -400 
  });
  $('.banner').waypoint(function(direction) {
    if (direction === 'down') {
      $('.home .ckan').addClass('fade');
      $('.banner .action').addClass('fade');
    }
    else {
      $('.home .ckan').removeClass('fade');
      $('.banner .action').removeClass('fade');
    }
  }, 
  { 
    offset: -250 
  });
  
  
  $('.home .case-studies .wrapper').slick({
	  infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    slide: 'li',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
	});
  
});