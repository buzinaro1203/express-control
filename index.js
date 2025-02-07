
function onChangeEmail() {
  toggleButtonDisable();
  toggleEmailErrors();
}
function onChangePassword() {
  toggleButtonDisable();
  togglePasswordErrors();
}
function isEmailValid() {
  const email = form.email();
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function isPasswordValid() {
  const password = form.password();
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
  const email = form.email();
  form.emailRequiredError().display = !email ? "none" : "block";

  form.emailInvalidError().display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
  const password = form.password();
  if (!password) {
    form.passwordRequiredError().display = "block";
  } else {
    form.passwordRequiredError().display = "none";
  }

  if (password.length > 5 || password.length === 0) {
    form.passwordMinLengthError().display = "none";
  } else {
    form.passwordMinLengthError().display = "block";
  }
}

function toggleButtonDisable() {
  const emailValid = isEmailValid();
  form.recoverPasswordButton().disabled = !emailValid;
  const passwordValid = isPasswordValid();
  form.loginButton().disabled = !emailValid || !passwordValid;

  // Pega o valor da senha e do email e caso um dos dois sejam inválidos desabilita os botões
  // Caso os dois sejam validos habilita os botões

}

const form =
{
  email: () => document.getElementById("email").value,
  password: () => document.getElementById("password").value,
  emailRequiredError: () => document.getElementById("email-required-error"),
  emailInvalidError: () => document.getElementById("email-invalid-error"),
  passwordRequiredError: () => document.getElementById("password-required-error"),
  passwordMinLengthError: () => document.getElementById("password-min-length-error"),
  recoverPasswordButton: () => document.getElementById("recover-password-button"),
  loginButton: () => document.getElementById("login-button")
}