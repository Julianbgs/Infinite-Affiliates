import './index.sass';

export default () => {
  $(document).on('click', '.banner__item', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
  });
};
