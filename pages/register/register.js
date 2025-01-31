function onChangeEmail() {
}

const form = {
  email: () => document.getElementById('email'),
  emailRequiredError: () => document.getElementById('emailRequiredError'),
  emailInvalidError: () => document.getElementById('emailInvalidError'),
  password: () => document.getElementById('password'),
  passwordRequiredError: () => document.getElementById('passwordRequiredError'),
  passwordInvalidError: () => document.getElementById('passwordInvalidError'),
  confirmPassword: () => document.getElementById('confirmPassword'),
  confirmPasswordRequiredError: () => document.getElementById('confirmPasswordRequiredError'),
  confirmPasswordInvalidError: () => document.getElementById('confirmPasswordInvalidError'),
  button: () => document.getElementById('button')
}