import './header.sass';

export default () => {
  $(document).on('click', '#header-trigger', function (event) {
    event.preventDefault();
    const $menu = $('.header__mobile-menu');
    const $list = $('.header__list--mobile');
    const $trigger = $('#header-trigger');
    const $body = $('body')
    $menu.animate({width:'toggle'}, 500, () => {
      if ($trigger.hasClass('js-trigger-active')) {
        $list.css('opacity', 1)
      }
    });
    if ($(this).hasClass('js-trigger-active')) {
      $(this).removeClass('js-trigger-active');
      $list.css('opacity', 0)
      $body.css('overflow', 'auto');
    } else {
      $(this).addClass('js-trigger-active');
      $body.css('overflow', 'hidden');
    }
    return false;
  });
};
