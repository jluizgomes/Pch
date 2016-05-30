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

  if ($(window).width() > 992) {
    $('.menu_items.side').show();
    $('.menu_items.accordion').hide();
    $('.submenu').removeClass('inside');
    $('.submenu').addClass('outside');
    $('.submenu').css({
      'height': $(window).height() - 45
    });

    //Close Submenu
    $('.submenu-close').on('click', function() {
      $('.menu_items ul li').find('a').removeClass("active");
      $('.menu_items ul li').find('a').removeAttr('style');
      $(this).stop().fadeOut(300);
      $('.submenu').animate({
        'right': 0,
        'opacity': 0
      }, 500, function() {
        $(this).stop().fadeOut(100, function() {
          $(this).css({
            'opacity': '1',
            'right': '-104%'
          });
        });
      });
    });

    $('.menu_items ul').find('li').each(function() {
      var $this = $(this);
      $this.on('mouseenter', function() {
        $this.find('a').addClass('active');
        if($this.parent().has('.submenu')){
          $this.find('.submenu').stop().fadeIn(300);
        } else {
          return false;
        }
      }).on('mouseleave', function() {
        $this.find('a').removeClass('active');
        $('.submenu').stop().fadeOut(300);
      });
    });
  } else {
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
  }
});
