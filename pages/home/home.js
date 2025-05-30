function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = '../../index.html';
  }).catch((error) => {
    alert(error.message);
  });
}
function user() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.getElementById('user').innerHTML = user.email;
    } else {
      window.location.href = '../../index.html';
    }
  });
}

user();