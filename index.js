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
  const password = form.password();
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(response => {
      console.log(response); window.location.href = 'pages/home/home.html';
      hideLoading();
    })
    .catch(error => {
      hideLoading();
      console.log(error); alert('Email ou senha inválidos');

    });
}
// BUG: THE FUNCTION RECOVERPASSWORD IS NOT WORKING PROPERLY THE FUNCTION IS SENDING THE EMAIL TO THE USER INDEPENDENTLY OF THE EMAIL BEING REGISTERED OR NOT
function recoverPassword() {
  showLoading();
  const email = form.email();
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

}

function isEmailValid() {
  const email = form.email();
  if (!email && email.length > 0) {
    return false;
  }
  return validateEmail(email);
}

function isPasswordValid() {
  const password = form.password();
  if (password.length < 8 && password.length > 0) {
    return false;
  }
  return true;
}

function toggleEmailErrors() {
  const email = form.email();
  form.emailRequiredError().style.display = email ? "none" : "block";

  form.emailInvalidError().style.display = email && !isEmailValid() ? "block" : "none";
}

function togglePasswordErrors() {
  const password = form.password();
  form.passwordRequiredError().style.display = password ? "none" : "block";
  form.passwordInvalidError().style.display = isPasswordValid() ? "none" : "block";
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
  passwordInvalidError: () => document.getElementById("password-min-length-error"),
  recoverPasswordButton: () => document.getElementById("recover-password-button"),
  loginButton: () => document.getElementById("login-button")
}