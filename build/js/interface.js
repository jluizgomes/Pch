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
      if($('.main').hasClass('page-left')){
        $('.main').removeClass('page-left');
        $('.left-menu').animate({
          'left': '0'
        });
        $('.main').animate({
          'margin-left': '0'
        });
      } else if($('.main').hasClass('page-right')){
        $('.main').removeClass('page-right');
        $('.right-menu').animate({
          'right': '0'
        });
        $('.main').animate({
          'margin-left': '0'
        });
      }
  });
});
