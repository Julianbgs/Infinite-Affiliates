import './footer.sass';

export default () => {
  const $link = $('.footer__link');
  $link.on('click', function (event) {
    event.preventDefault();
    console.log($($.attr(this, 'href')));
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
  });
}
