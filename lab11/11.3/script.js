// document.getElementById('usun_wszystkie_produkty').addEventListener('click', function() {
//     localStorage.removeItem('koszyk');
//     alert('Wszystkie produkty zostały usunięte z koszyka');
// });
// function dodajProduktDoKoszyka() {
//     const nazwa_produktu = document.getElementById('nazwa_produktu').value;
//     const cena = document.getElementById('cena').value;
//     const kolor = document.getElementById('kolor').value;
//     const liczba_sztuk = document.getElementById('liczba_sztuk').value;

//     const produkt = {
//         nazwa_produktu: nazwa_produktu,
//         cena: cena,
//         kolor: kolor,
//         liczba_sztuk: liczba_sztuk
//     };

//     let koszyk = JSON.parse(localStorage.getItem('koszyk')) || [];

//     koszyk.push(produkt);
//     localStorage.setItem('koszyk', JSON.stringify(koszyk));
//     alert('Produkt został zapisany do koszyka');
// }

// function wyswietlKoszyk() {
//     const koszyk = JSON.parse(localStorage.getItem('koszyk')) || [];
//     const wynik = document.getElementById('wynik');

//     if (koszyk.length === 0) {
//         wynik.innerHTML = 'Koszyk jest pusty.';
//     } else {
//         let tabela = '<table><tr><th>Nazwa produktu</th><th>Cena</th><th>Kolor</th><th>Liczba sztuk</th></tr>';
//         koszyk.forEach(function(produkt) {
//             tabela += '<tr><td>' + produkt.nazwa_produktu + '</td><td>' + produkt.cena + ' zł</td><td>' + produkt.kolor + '</td><td>' + produkt.liczba_sztuk + '</td></tr>';
//         });
//         tabela += '</table>';
//         wynik.innerHTML = tabela;
//     }
// }

// function usunWszystkieProdukty() {
//     localStorage.removeItem('koszyk');
//     alert('Wszystkie produkty zostały usunięte z koszyka');
// }

// document.getElementById('zapisz_produkt').addEventListener('click', dodajProduktDoKoszyka);
// document.getElementById('wyswietl_koszyk').addEventListener('click', wyswietlKoszyk);
// document.getElementById('usun_wszystkie_produkty').addEventListener('click', usunWszystkieProdukty);


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
    czyscFormularz();
}

function aktualizujProdukt() {
    const indeks = document.getElementById('indeks_edycji').value;
    const nazwa_produktu = document.getElementById('nazwa_produktu').value;
    const cena = document.getElementById('cena').value;
    const kolor = document.getElementById('kolor').value;
    const liczba_sztuk = document.getElementById('liczba_sztuk').value;

    let koszyk = JSON.parse(localStorage.getItem('koszyk')) || [];

    koszyk[indeks] = {
        nazwa_produktu: nazwa_produktu,
        cena: cena,
        kolor: kolor,
        liczba_sztuk: liczba_sztuk
    };

    localStorage.setItem('koszyk', JSON.stringify(koszyk));
    alert('Produkt został zaktualizowany');
    czyscFormularz();
    wyswietlKoszyk();
}

function czyscFormularz() {
    document.getElementById('formularz_produktu').reset();
    document.getElementById('indeks_edycji').value = '';
    document.getElementById('zapisz_produkt').style.display = 'inline';
    document.getElementById('aktualizuj_produkt').style.display = 'none';
}

function wyswietlKoszyk() {
    const koszyk = JSON.parse(localStorage.getItem('koszyk')) || [];
    const wynik = document.getElementById('wynik');
    const wyszukiwarka = document.getElementById('wyszukiwarka').value.toLowerCase();

    if (koszyk.length === 0) {
        wynik.innerHTML = 'Koszyk jest pusty.';
    } else {
        let tabela = '<table><tr><th>Nazwa produktu</th><th>Cena</th><th>Kolor</th><th>Liczba sztuk</th><th>Akcje</th></tr>';
        koszyk.forEach(function (produkt, indeks) {
            if (produkt.nazwa_produktu.toLowerCase().includes(wyszukiwarka)) {
                tabela += '<tr><td>' + produkt.nazwa_produktu + '</td><td>' + produkt.cena + '</td><td>' + produkt.kolor + '</td><td>' + produkt.liczba_sztuk + '</td><td><button onclick="edytujProdukt(' + indeks + ')">Edytuj</button><button onclick="usunProdukt(' + indeks + ')">Usuń</button></td></tr>';
            }
        });
        tabela += '</table>';
        wynik.innerHTML = tabela;
    }
}

function schowajKoszyk() {
    const wynik = document.getElementById('wynik');
    wynik.innerHTML = '';
}

function edytujProdukt(indeks) {
    const koszyk = JSON.parse(localStorage.getItem('koszyk')) || [];
    const produkt = koszyk[indeks];

    document.getElementById('indeks_edycji').value = indeks;
    document.getElementById('nazwa_produktu').value = produkt.nazwa_produktu;
    document.getElementById('cena').value = produkt.cena;
    document.getElementById('kolor').value = produkt.kolor;
    document.getElementById('liczba_sztuk').value = produkt.liczba_sztuk;

    document.getElementById('zapisz_produkt').style.display = 'none';
    document.getElementById('aktualizuj_produkt').style.display = 'inline';
}

function usunProdukt(indeks) {
    let koszyk = JSON.parse(localStorage.getItem('koszyk')) || [];
    koszyk.splice(indeks, 1);
    localStorage.setItem('koszyk', JSON.stringify(koszyk));
    alert('Produkt został usunięty z koszyka');
    wyswietlKoszyk();
}

function usunWszystkieProdukty() {
    localStorage.removeItem('koszyk');
    alert('Wszystkie produkty zostały usunięte z koszyka');
}

document.getElementById('zapisz_produkt').addEventListener('click', dodajProduktDoKoszyka);
document.getElementById('aktualizuj_produkt').addEventListener('click', aktualizujProdukt);
document.getElementById('wyswietl_koszyk').addEventListener('click', wyswietlKoszyk);
document.getElementById('schowaj_koszyk').addEventListener('click', schowajKoszyk);
document.getElementById('usun_wszystkie_produkty').addEventListener('click', usunWszystkieProdukty);
document.getElementById('wyszukiwarka').addEventListener('input', wyswietlKoszyk);
