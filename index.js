function validateFields() {
  const emailValid = isEmailValid();
  document.getElementById('recover-password-button').disabled = !emailValid;
  const passwordValid = isPasswordValid();
  document.getElementById('login-button').disabled = !emailValid || !passwordValid;

  // Pega o valor da senha e do email e caso um dos dois sejam inválidos desabilita os botões
  // Caso os dois sejam validos habilita os botões

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