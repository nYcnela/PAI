function sprawdzPole(pole_id, obiektRegex) {
  let obiektPole = document.getElementById(pole_id);
  if (!obiektRegex.test(obiektPole.value))
      return undefined;
  else
      return obiektPole.value;
}

function sprawdz_box(nazwa_radio){
  let produkty = [];
  let obiekt = document.getElementsByName(nazwa_radio);
  for (let i = 0; i < obiekt.length; i++){
      let wybrany = obiekt[i].checked;
      if (wybrany) {
          produkty.push(obiekt[i].getAttribute('id'));
      }
  }
  if (produkty.length == 0) {
      return undefined;
  } else {
      return produkty;
  }
}

function znajdz_zaznaczony_radio(nazwa_radio) {
  let obiekt = document.getElementsByName(nazwa_radio);
  for (let i = 0; i < obiekt.length; i++) {
      if (obiekt[i].checked) {
          return obiekt[i].getAttribute('id');
      }
  }
  return undefined;
}

function sprawdz() {
  let ok = true;
  let wprowadzoneDane = "Dane z wypełnionego przez Ciebie formularza:\n";
  let platnosc = "";
  
  const obiektNazw = /^[a-zA-Z]{2,20}$/;
  const obiektEmail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+$/;
  const obiektWiek = /^[1-9][0-9]{1,2}$/;

  const nazwisko = sprawdzPole("nazw", obiektNazw);
  if (!nazwisko) {
      ok = false;
      document.getElementById("nazw_error").innerHTML = "Wpisz poprawnie nazwisko!";
  } else {
      document.getElementById("nazw_error").innerHTML = "";
      wprowadzoneDane += "Nazwisko: " + nazwisko + "\n";
  }

  const wiek = sprawdzPole("wiek", obiektWiek);
  if (!wiek) {
      ok = false;
      document.getElementById("wiek_error").innerHTML = "Wpisz poprawnie wiek!";
  } else {
      document.getElementById("wiek_error").innerHTML = "";
      wprowadzoneDane += "Wiek: " + wiek + "\n";
  }
  
  wprowadzoneDane += "Kraj: " + document.getElementById('kraj').value + "\n"

  const email = sprawdzPole("email", obiektEmail);
  if (!email) {
      ok = false;
      document.getElementById("email_error").innerHTML = "Wpisz poprawnie email!";
  } else {
      document.getElementById("email_error").innerHTML = "";
      wprowadzoneDane += "Email: " + email + "\n";
  }
  
  const produkty = sprawdz_box("jezyk");
  if (!produkty) {
    ok = false;
    document.getElementById("produkt_error").innerHTML = "Musisz wybrac produkt!";
  } else {
    document.getElementById("produkt_error").innerHTML = "";
    wprowadzoneDane += "Wybrane produkty: " + produkty.join(", ") + "\n";
  }
  
  platnosc = znajdz_zaznaczony_radio("platnosc");
  if (!platnosc) {
    ok = false;
    document.getElementById("zaplata_error").innerHTML = "Musisz wskazać sposób zapłaty!";
  } else {
    document.getElementById("zaplata_error").innerHTML = "";
    wprowadzoneDane += "Sposób zapłaty: " + platnosc + "\n";
  }
    
  if(ok){
    pokazDane(wprowadzoneDane)
  }
  return ok;
}
  
function pokazDane(dane) {
  if (window.confirm(dane)) return true;
  else return false;
}


