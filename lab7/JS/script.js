function pokaz(id) {
  let tresc = "";
  switch (id) {
    case 2:
      tresc += pokazGalerie();
      break;
    case 3:
      tresc += pokazPost();
      break;
    case 4:
      tresc += pokazKontakt();
      break;
    default:
      tresc += pokazO();

  }
  document.getElementById("blok").innerHTML = tresc;
}
  
function pokazO() {
  let tresc =
  '<h2>Pierwsze kroki</h2> ' +
  '<p> W aplikacjach typu SPA (ang. Single Page Application) po przesłaniu pierwszego żądania również dochodzi do odesłania początkowego dokumentu HTML do przeglądarki, jednak po zakończeniu inicjalizacji wszelkie działania użytkownika prowadzą tylko do wysłania żadań asynchronicznie (w tle za pomocą AJAX). Odpowiedziami na te żądania zwykle są tylko fragmenty kodu HTML (zamiast całych dokumentów), a niekiedy wyłącznie dane, które następnie są wstawiane zamiennie w ramach istniejących elementów dokumentu HTML. Nigdy nie dochodzi do zamiany całego dokumentu HTML.</p>' +
  '<p class="srodek"><img src="../Pictures/baner.jpg" alt="Zdjecie"></p>' +
  '<article><h2>Wady SPA</h2><p>' +
  ' Czas wytworzenie oraz nakład pracy włożony w stworzenie aplikacji jest większy co wiąże ze sobą dodatkowe koszta, dlatego tworzenie małych stron jest nieopłacalne - efekt dla strony z jedną zakładka jest niezauważalny. Pozycjonowanie stron wymaga większego nakładu pracy. Obecnie roboty indeksujące Google nie radzą sobie ze stronami tego typu, co wiąże się z koniecznością tworzenia rozwiązań przystosowanych dla robotów</p></article>';
  return tresc;
}
  
function pokazGalerie() {
  let tresc = '<h2>Moja galeria</h2>';
  tresc += ' <div class="galeria">';
  for (let i = 1; i <= 10; i++) {
    tresc += '<div class="slajd"> <a href="../Pictures/zdjecia/obraz' + i + '.JPG" target="_blank"><img src="../Pictures/miniaturki/obraz'+ i + '.JPG" alt="Zdjecie"></img></div>';
  }
  return tresc + '</div>'
}
  
function pokazKontakt() {
  let tresc = '<h2>Kontakt</h2>';
  tresc += '<table class="centrowanie"> <tr> <td>Telefon:</td><td>+48 123 234 345</td> </tr><tr><td>Email: </td>   <td>politechnika@pollub.pl</td></tr><tr><td>Adres:</td><td>Nadbystrzycka 20</td></tr></table>'
  return tresc;
}
  
function pokazPost(){
  tresc = '<h2>Dodaj post </h2>'
  tresc += '<article class="srodek"><form action="mailto:test@test.com" method="post" onsubmit="return pokazDane();">' +
  'Twój email:<br><input type="email" name="email" id="email" size="30" required pattern="^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/><br>' +
  'Imię i Nazwisko:<br><input type="text" id="nazwisko" name="nazwisko" size="30" required><br>' +
  'Telefon:<br><input type="tel" id="telefon" name="telefon" size="30" pattern="^[0-9]+$" required><br>' +
  '<br><div id="zainteresowania">Zainteresowania:<br>' +
  '<input type="checkbox" name="zainteresowania[]" value="Sport">Sport ' +
  '<input type="checkbox" name="zainteresowania[]" value="Muzyka">Muzyka ' +
  '<input type="checkbox" name="zainteresowania[]" value="Film">Film ' +
  '<input type="checkbox" name="zainteresowania[]" value="Inne">Inne</div>' +
  '<div id="wiek"><br>Wiek:<br>' +
  '<input type="radio" name="wiek" value="Mniej niż 10">Mniej niż 10 ' +
  '<input type="radio" name="wiek" value="10-20">10-20 ' +
  '<input type="radio" name="wiek" value="20-30">20-30 ' +
  '<input type="radio" name="wiek" value="30-40">30-40 ' +
  '<input type="radio" name="wiek" value="40-50">40-50 ' +
  '<input type="radio" name="wiek" value="Więcej niż 50">Więcej niż 50</div>' +
  'Komentarz:<br><textarea cols="35" rows="5" id="wiadomosc" name="wiadomosc"></textarea>' +
  '<br><input type="submit" name="wyslij" value="Wyślij"/>' +
  '</form></article>';
  return tresc;
}
function pokazDane() {
  let dane = "Następujące dane zostaną wysłane:\n";
  dane += "Email: " + document.getElementById("email").value + "\n";
  dane+="Imię i Nazwisko: "+document.getElementById('nazwisko').value+"\n";
  dane+="Telefon: "+document.getElementById('telefon').value+"\n";
  let checkboxes = document.getElementsByName('zain');
  let checkboxesZaz = []
  for(let index = 0; index < checkboxes.length; index++){
    if(checkboxes[index].checked){
      checkboxesZaz.push(checkboxes[index].value)
    }
  }
  dane += 'Zainteresowania: ' + checkboxesZaz + "\n"
  let temp = dociment.getElementsByName('wie')
  if (window.confirm(dane)) return true;
  else return false;
}
  