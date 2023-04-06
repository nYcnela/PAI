let obliczBtn = document.getElementById('oblicz');

function oblicz() {
  let operacja = document.getElementsByName("operacja");
  let op = '';
  for (let i = 0; i < operacja.length; i++) {
    if (operacja[i].checked) {
      op = operacja[i].value;
    }
  }
  let pierwszaLiczba = parseFloat(document.getElementById('pierwsza').value);
  let drugaLiczba = parseFloat(document.getElementById('druga').value);
  
  if (isNaN(pierwszaLiczba) || isNaN(drugaLiczba)) {
    alert('Wprowadź poprawne wartości dla obu liczb!');
    return;
  }
  
  let wynik;
  
  switch (op) {
    case 'dodawanie':
      wynik = pierwszaLiczba + drugaLiczba;
      break;
    case 'odejmowanie':
      wynik = pierwszaLiczba - drugaLiczba;
      break;
    case 'mnożenie':
      wynik = pierwszaLiczba * drugaLiczba;
      break;
    case 'dzielenie':
      if (drugaLiczba === 0) {
        alert('Nie można dzielić przez zero!');
        return;
      }
      wynik = pierwszaLiczba / drugaLiczba;
      break;
    default:
      break;
  }

  document.getElementById('wynik').value = wynik;
}

obliczBtn.addEventListener('click', oblicz);
