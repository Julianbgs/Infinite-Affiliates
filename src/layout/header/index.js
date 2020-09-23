import './header.sass';

export default () => {
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
