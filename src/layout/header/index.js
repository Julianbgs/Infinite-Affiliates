import './header.sass';

export default () => {
  const $link = $('.header__link');
  const $overlay = $('.header__mobile-menu-overlay');
  const $menu = $('.header__mobile-menu');
  const $trigger = $('#header-trigger');
  const $body = $('body')
  $link.on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
    setTimeout(() => {
      $menu.removeClass('open');
      $overlay.fadeOut();
      $trigger.removeClass('js-trigger-active');
      $body.css('overflow', 'auto');
    }, 500)
  });

  $(document).on('click', '#header-trigger', function (event) {
    event.preventDefault();
    if ($(this).hasClass('js-trigger-active')) {
      $(this).removeClass('js-trigger-active');
      $menu.removeClass('open');
      $body.css('overflow', 'auto');
      $overlay.fadeOut();
    } else {
      $(this).addClass('js-trigger-active');
      $body.css('overflow', 'hidden');
      $menu.addClass('open');
      $overlay.fadeIn();
    }
    return false;
  });
};
