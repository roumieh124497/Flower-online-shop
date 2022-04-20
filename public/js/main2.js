function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
var userID = uuid();

if (!Cookies.get('userID')) {
  Cookies.set('userID', userID, { expires: 7 });
}

(function ($) {
  'use strict';

  new WOW().init();

  $('.aboutHref').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('.about-container').offset().top,
      },
      700,
    );
  });
  $('.contactHref').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('.contact').offset().top,
      },
      700,
    );
  });

  $('.bestSellerHref').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('.best').offset().top,
      },
      700,
    );
  });

  //navbar cart
  $('.cart_link > a').on('click', function () {
    $('.mini_cart').addClass('active');
  });

  $('.mini_cart_close > a').on('click', function () {
    $('.mini_cart').removeClass('active');
  });

  //sticky navbar
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $('.sticky-header').removeClass('sticky');
    } else {
      $('.sticky-header').addClass('sticky');
    }
  });

  // background image animation
  function dataBackgroundImage() {
    $('[data-bgimg]').each(function () {
      var bgImgUrl = $(this).data('bgimg');
      $(this).css({
        'background-image': 'url(' + bgImgUrl + ')', // concatenation
      });
    });
  }

  $(window).on('load', function () {
    dataBackgroundImage();
  });

  //animation pic
  $('.slider_area').owlCarousel({
    animateOut: 'fadeOut',
    autoplay: true,
    loop: true,
    nav: false,
    autoplayTimeout: 6000,
    items: 1,
    dots: true,
  });

  //Best seller

  const tabs = document.querySelectorAll('[data-tab-target]');
  const tabContents = document.querySelectorAll('[data-tab-content]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget);

      tabContents.forEach(tabContent => {
        tabContent.classList.remove('active');
      });

      tabs.forEach(tab => {
        tab.classList.remove('active');
      });
      tab.classList.add('active');
      target.classList.add('active');

      target.classList.add('active');
    });
  });

  //for tooltip
  $('[data-toggle="tooltip"]').tooltip();

  //tooltip active
  $('.action_links ul li a, .quick_button a').tooltip({
    animated: 'fade',
    placement: 'top',
    container: 'body',
  });
})(jQuery);
