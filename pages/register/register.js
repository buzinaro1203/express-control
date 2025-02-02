function onChangeEmail() {
  toggleEmailErrors();
  toggleButtonDisable()
}
function onChangePassword() {
  togglePasswordErrors();
  toggleButtonDisable()
}
function onchangeConfirmPassword() {
  toggleConfirmPasswordErrors();
  toggleButtonDisable()
}

function toggleEmailErrors() {
  const email = form.email().value;
  form.emailRequiredError().style.display = email ? "none" : "block";
  form.emailInvalidError().style.display = !email || validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
  const password = form.password().value;
  form.passwordRequiredError().style.display = password ? "none" : "block";
  form.passwordMinLengthError().style.display = !password || validatePassword(password) ? "none" : "block";
}

function toggleConfirmPasswordErrors() {
  const password = form.password().value;
  const confirmPasswordInputValue = form.confirmPassword().value;

  form.confirmPasswordRequiredError().style.display = confirmPasswordInputValue ? "none" : "block";
  form.confirmPasswordInvalidError().style.display = !confirmPasswordInputValue || confirmPassword(password, confirmPasswordInputValue) ? "none" : "block";
}

function toggleButtonDisable() {
  const email = form.email().value;
  const password = form.password().value;
  const confirmPasswordInputValue = form.confirmPassword().value;
  const emailValid = validateEmail(email);
  const passwordValid = validatePassword(password);
  const corfimedPassword = confirmPassword(password, confirmPasswordInputValue);
  form.registerButton().disabled = !emailValid || !passwordValid || !corfimedPassword;
}

function registerAccount() {
  const email = form.email().value;
  const password = form.password().value;
  showLoading();

  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    hideLoading();
    alert('Account created successfully');

  })
    .catch((error) => {
      hideLoading();
      alert(error.message);
    });
}

function goToLogin() {
  window.location.href = '../../index.html';
}



const form = {
  email: () => document.getElementById('email'),
  emailRequiredError: () => document.getElementById('emailRequiredError'),
  emailInvalidError: () => document.getElementById('emailInvalidError'),
  password: () => document.getElementById('password'),
  passwordRequiredError: () => document.getElementById('passwordRequiredError'),
  passwordMinLengthError: () => document.getElementById('passwordMinLengthError'),
  confirmPassword: () => document.getElementById('confirmPassword'),
  confirmPasswordRequiredError: () => document.getElementById('confirmPasswordRequiredError'),
  confirmPasswordInvalidError: () => document.getElementById('confirmPasswordInvalidError'),
  registerButton: () => document.getElementById('registerButton')
}