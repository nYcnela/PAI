document.getElementById('usun_wszystkie_produkty').addEventListener('click', function() {
    localStorage.removeItem('koszyk');
    alert('Wszystkie produkty zostały usunięte z koszyka');
});
function dodajProduktDoKoszyka() {
    const nazwa_produktu = document.getElementById('nazwa_produktu').value;
    const cena = document.getElementById('cena').value;
    const kolor = document.getElementById('kolor').value;
    const liczba_sztuk = document.getElementById('liczba_sztuk').value;

    const produkt = {
        nazwa_produktu: nazwa_produktu,
        cena: cena,
        kolor: kolor,
        liczba_sztuk: liczba_sztuk
    };

    let koszyk = JSON.parse(localStorage.getItem('koszyk')) || [];

    koszyk.push(produkt);
    localStorage.setItem('koszyk', JSON.stringify(koszyk));
    alert('Produkt został zapisany do koszyka');
}

function wyswietlKoszyk() {
    const koszyk = JSON.parse(localStorage.getItem('koszyk')) || [];
    const wynik = document.getElementById('wynik');

    if (koszyk.length === 0) {
        wynik.innerHTML = 'Koszyk jest pusty.';
    } else {
        let tabela = '<table><tr><th>Nazwa produktu</th><th>Cena</th><th>Kolor</th><th>Liczba sztuk</th></tr>';
        koszyk.forEach(function(produkt) {
            tabela += '<tr><td>' + produkt.nazwa_produktu + '</td><td>' + produkt.cena + ' zł</td><td>' + produkt.kolor + '</td><td>' + produkt.liczba_sztuk + '</td></tr>';
        });
        tabela += '</table>';
        wynik.innerHTML = tabela;
    }
}

function usunWszystkieProdukty() {
    localStorage.removeItem('koszyk');
    alert('Wszystkie produkty zostały usunięte z koszyka');
}

document.getElementById('zapisz_produkt').addEventListener('click', dodajProduktDoKoszyka);
document.getElementById('wyswietl_koszyk').addEventListener('click', wyswietlKoszyk);
document.getElementById('usun_wszystkie_produkty').addEventListener('click', usunWszystkieProdukty);
