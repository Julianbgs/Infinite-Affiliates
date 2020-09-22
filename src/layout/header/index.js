import './header.sass';

export default () => {
  $(document).on('click', '#header-trigger', function (event) {
    event.preventDefault();
    if ($(this).hasClass('js-trigger-active')) {
      $(this).removeClass('js-trigger-active');
    } else {
      $(this).addClass('js-trigger-active');
    }
    return false;
  });
};
