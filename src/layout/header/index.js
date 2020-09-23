import './header.sass';

export default () => {
  const $link = $('.header__link');
  $link.on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
  });

  $(document).on('click', '#header-trigger', function (event) {
    event.preventDefault();
    const $menu = $('.header__mobile-menu');
    const $body = $('body')
    if ($(this).hasClass('js-trigger-active')) {
      $(this).removeClass('js-trigger-active');
      $menu.removeClass('open');

      $body.css('overflow', 'auto');
    } else {

      $(this).addClass('js-trigger-active');
      $body.css('overflow', 'hidden');
      $menu.addClass('open');
    }
    return false;
  });
};
