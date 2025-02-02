const form =
{
  email: () => document.getElementById("email"),
  password: () => document.getElementById("password"),
  emailRequiredError: () => document.getElementById('emailRequiredError'),
  emailInvalidError: () => document.getElementById('emailInvalidError'),
  passwordRequiredError: () => document.getElementById('passwordRequiredError'),
  passwordMinLengthError: () => document.getElementById('passwordMinLengthError'),
  recoverPasswordButton: () => document.getElementById("recover-password-button"),
  loginButton: () => document.getElementById("login-button")
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.location.href = 'pages/home/home.html';
  }
}
);


function onChangeEmail() {
  toggleButtonDisable();
  toggleEmailErrors();
}
function onChangePassword() {
  toggleButtonDisable();
  togglePasswordErrors();
}
function login() {
  showLoading();
  const email = form.email().value;
  console.log(email);
  const password = form.password();
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = 'pages/home/home.html';
      hideLoading();
    })
    .catch(error => {
      hideLoading();
      alert(getErrorMessage(error.code));

    });
}
// BUG: THE FUNCTION RECOVERPASSWORD IS NOT WORKING PROPERLY THE FUNCTION IS SENDING THE EMAIL TO THE USER INDEPENDENTLY OF THE EMAIL BEING REGISTERED OR NOT
function recoverPassword() {
  showLoading();
  const email = form.email().value;
  firebase.auth().sendPasswordResetEmail(email).then(() => {
    console.log(email);
    hideLoading(); alert('Email enviado com sucesso!')
  })
    .catch((error) => {
      hideLoading();
      alert(getErrorMessage(error.code));
      console.log(error.code);
    })
}

function getErrorMessage(errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Email inválido';
    case 'auth/user-not-found':
      return 'Usuário não encontrado';
    case 'auth/user-disabled':
      return 'Usuário desabilitado';
    case 'auth/email-already-in-use':
      return 'Email já cadastrado';
    case 'auth/wrong-password':
      return 'Senha inválida';
    default:
      return 'Erro desconhecido';
  }
}

function register() {
  window.location.href = 'pages/register/register.html';
}

function toggleEmailErrors() {
  const email = form.email().value;
  form.emailRequiredError().style.display = email ? "none" : "block";

  form.emailInvalidError().style.display = !email || validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
  const password = form.password();
  form.passwordRequiredError().style.display = password ? "none" : "block";
  form.passwordMinLengthError().style.display = validatePassword(password) ? "none" : "block";
}

function toggleButtonDisable() {
  const email = form.email().value;
  const password = form.password().value;
  const emailValid = validateEmail(email);
  console.log(email, password);
  const passwordValid = validatePassword(password);
  form.recoverPasswordButton().disabled = !emailValid;
  form.loginButton().disabled = !emailValid || !passwordValid;
}



