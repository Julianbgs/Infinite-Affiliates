import './index.sass';

export default () => {
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validate() {
    const $resultEmail = $("#resultEmail");
    const $resultName = $("#resultName");
    const email = $("#email").val();
    const $name = $('#name').val();
    $resultEmail.text("");

    if (validateEmail(email)) {
      $resultEmail.text(email + " is valid");
      $resultEmail.css("color", "green");
    } else {
      $resultEmail.text(email + " is not valid");
      $resultEmail.css("color", "red");
    }

    if ($name.length < 1) {
      $resultName.text('Name must be not empty');
      $resultName.css("color", "red");
    } else {
      $resultName.text('');
    }

    return false;
  }

  $("#validate").on("click", validate);
}
