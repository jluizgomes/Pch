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

  $('.menu_items.side').hide();
  $('.menu_items.accordion').show();
  $('.submenu').removeClass('outside');
  $('.submenu').addClass('inside');
  $('.menu_items').find('h3').on('click', function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.menu_items h3').css({
        'background': '#191919 url("./images/arrow-menu-list.png") 95% center no-repeat'
      });
    } else {
      $(this).addClass('active');
      $('.menu_items h3.active').css({
        'background': '#020202 url("./images/arrow-menu-list-down-active.png") 95% center no-repeat'
      });
    }
  });
});
