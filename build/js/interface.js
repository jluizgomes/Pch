$(function() {
  $('.left-nav a').on('click', function() {
    $('.main').addClass('page-left');
    $('.left-menu').animate({
      'left': '250px'
    });
    $('.main').animate({
      'margin-left': '250px'
    });
  });
  $('.right-nav a').on('click', function() {
    $('.main').addClass('page-right');
    $('.right-menu').animate({
      'right': '250px'
    });
    $('.main').animate({
      'margin-left': '-250px'
    });
  });
  $('.closeMenu').on('click', function() {
    if ($('.main').hasClass('page-left')) {
      $('.main').removeClass('page-left');
      $('.left-menu').animate({
        'left': '0'
      });
      $('.main').animate({
        'margin-left': '0'
      });
    } else if ($('.main').hasClass('page-right')) {
      $('.main').removeClass('page-right');
      $('.right-menu').animate({
        'right': '0'
      });
      $('.main').animate({
        'margin-left': '0'
      });
    }
  });
  $('.items').stop().fadeOut(0);

  $('#detail').css({
    'height': $(window).height()
  });

  //Carousel
  var owl = $(".gallery-item");
  owl.owlCarousel({
    navigation: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    pagination: false,
    lazyLoad: true
  });
  $(".arrow-right").click(function() {
    owl.trigger('owl.next');
  });
  $(".arrow-left").click(function() {
    owl.trigger('owl.prev');
  });

  //Lightbox
  $(".fancybox-thumbs").fancybox({
    prevEffect: 'none',
    nextEffect: 'none',

    closeBtn: true,
    arrows: true,
    nextClick: true,

    helpers: {
      thumbs: {
        width: 50,
        height: 50
      }
    }
  });

  //Close Submenu
  $('.submenu-close').on('click', function() {
    $('.submenu').stop().fadeOut(300);
    $('.menu_items ul li').find('a').removeClass("active");
  });
  
  $('.menu_items ul li').find('a').on('click', function() {
    $(this).addClass('active');
    if ($('.menu_items ul li').has('ul')) {
      $('.submenu').stop().fadeIn(300);
    }
  });
});
