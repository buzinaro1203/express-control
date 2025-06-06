//chama a função findTransaction quando o usuário é autenticado
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    findTransaction(user);
  }
});

//pega os dados do usuário autenticado e busca as transações no Firestore
function findTransaction(user) {
  showLoading();
  firebase.firestore()
    .collection('transactions')
    .where('user.UID', '==', user.uid)
    .orderBy('date', 'desc')
    .get()
    .then(snapshot => {
      hideLoading();
      const trasactions = snapshot.docs.map(doc => doc.data())

      addTransactionToScreen(trasactions);
    }
    ).catch(error => {
      hideLoading();
      alert(error.message);
    });
}
//adiciona as transações na tela
function addTransactionToScreen(transactions) {
  const oderedList = document.getElementById('transactions');

  transactions.forEach(transactions => {
    const li = document.createElement('li');
    li.classList.add(transactions.type);

    const date = document.createElement('p');
    date.innerHTML = formatDate(transactions.date);
    li.appendChild(date);

    const money = document.createElement('p');
    money.innerHTML = formatMoney(transactions.money);
    li.appendChild(money);

    const type = document.createElement('p');
    type.innerHTML = transactions.transactionType;
    li.appendChild(type);
    if (transactions.description) {
      const description = document.createElement('p');
      description.innerHTML = transactions.description;
      li.appendChild(description);
    }

    oderedList.appendChild(li);


  });
}

function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = '../../index.html';
  }).catch((error) => {
    alert(error.message);
  });
}

function newTransaction() {
  window.location.href = '../transaction/transaction.html';
}


//funções de formatação de data e dinheiro
function formatDate(date) {
  return new Date(date).toLocaleDateString("pt-BR");
}

function formatMoney(money) {
  return `${money.currency} ${money.value.toFixed(2).replace('.', ',')}`;

}
