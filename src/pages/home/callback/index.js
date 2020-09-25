import './index.sass';

export default () => {
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validate(e) {
    e.preventDefault();
    const $resultEmail = $("#resultEmail");
    const $resultName = $("#resultName");
    const $resultDescr = $('#resultDescr');
    const $email = $("#email").val();
    const $name = $('#name').val();
    const $descr = $('#descr').val();
    let validEmail = false;
    let validName = false;
    let validDescr = false;
    $resultEmail.text("");

    if (validateEmail($email)) {
      validEmail = true;
    } else {
      $resultEmail.text($email + " is not valid");
      $resultEmail.css("color", "red");
    }

    if ($name.length < 1) {
      $resultName.text('Name must be not empty');
      $resultName.css("color", "red");
    } else {
      validName = true;
      $resultName.text('');
    }

    if ($descr.length < 1) {
      $resultDescr.text('Text must be not empty');
      $resultDescr.css("color", "red");
    } else {
      validDescr = true;
      $resultDescr.text('');
    }

    if (validName && validEmail && validDescr) {
      let $modal = $('.callback__modal');
      let $text = $('.callback__modal-title');
      let $close = $('.callback__close');
      let $body = $('body');
      let bodyReq = {
         username: $name,
         email: $email,
         text: $descr
      }
      const json = JSON.stringify(bodyReq);
      $.ajax({
        url: 'http://api.infiniteaffiliates.co/seller-site/contact-us/',
        type: "POST",
        data: json,
        success: (resp) => {
          $modal.css('display', 'flex')
          $text.text('Success send');
          $text.css('color', 'green');
          $body.css('overflow', 'hidden');
          $close.on('click', () => {
            $modal.hide();
            $body.css('overflow', 'auto');
          })
        },
        error: () => {
          $modal.css('display', 'flex')
          $text.text('Fail send');
          $text.css('color', 'red');
          $body.css('overflow', 'hidden');
          $close.on('click', () => {
            $modal.hide();
            $body.css('overflow', 'auto');
          })
        },
        contentType:"application/json; charset=utf-8",
        dataType:"json",
      });
    }

    return false;
  }

  $("#validate").on("click", validate);
}
