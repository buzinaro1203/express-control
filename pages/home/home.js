function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = '../../index.html';
  }).catch((error) => {
    alert(error.message);
  });
}
findTransaction();

function findTransaction() {
  firebase.firestore().collection('transactions').get().then(snapshot => {
    const trasactions = snapshot.docs.map(doc => doc.data())

    addTransactionToScreen(trasactions);
  }
  )
}

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
    if (transactions.transactionType) {
      const description = document.createElement('p');
      description.innerHTML = transactions.description;
      li.appendChild(description);
    }

    oderedList.appendChild(li);


  });
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("pt-BR");
}

function formatMoney(money) {
  return `${money.currency} ${money.value.toFixed(2).replace('.', ',')}`;

}
