function validateFields() {
  toggleButtonDisable();
  toggleEmailErrors();
  togglePasswordErrors()

}
function isEmailValid() {
  const email = document.getElementById("email").value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function isPasswordValid() {
  const password = document.getElementById("password").value;
  if (!password) {
    return false;
  }
  return true;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function toggleEmailErrors() {
  const email = document.getElementById("email").value;
  if (!email) {
    document.getElementById('email-required-error').style.display = "block";
  } else {
    document.getElementById('email-required-error').style.display = "none";
  }

  if (validateEmail(email)) {

    document.getElementById('email-invalid-error').style.display = "none";

  } else {
    document.getElementById('email-invalid-error').style.display = "block";
  }
}

function togglePasswordErrors() {
  const password = document.getElementById("password").value;
  if (!password) {
    document.getElementById('password-required-error').style.display = "block";
  } else {
    document.getElementById('password-required-error').style.display = "none";
  }

  if (password.length > 5) {
    document.getElementById('password-min-length-error').style.display = "none";
  } else {
    document.getElementById('password-min-length-error').style.display = "block";
  }
}

function toggleButtonDisable() {
  const emailValid = isEmailValid();
  document.getElementById('recover-password-button').disabled = !emailValid;
  const passwordValid = isPasswordValid();
  document.getElementById('login-button').disabled = !emailValid || !passwordValid;

  // Pega o valor da senha e do email e caso um dos dois sejam inválidos desabilita os botões
  // Caso os dois sejam validos habilita os botões

}