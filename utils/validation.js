
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


function validatePassword(password) {
  if (password.lenght != 0 && password.length < 8) {
    return false;
  }
  return true;
}

function confirmPassword(password, confirmPassword) {
  return password === confirmPassword;
}