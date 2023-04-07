//FUNCKJA NAPISANA PRZED ZADANIEM 9.2

// let rataBtn = document.getElementById('rata')
// let infoBtn = document.querySelector('.komunikat')

// function obliczRate(){
//     infoBtn.style.visibility = 'hidden'
//     let kwota = document.getElementById('l1').value
//     let iloscRat = document.getElementById('l2').value
//     let oprocentowanie = document.getElementById('l3').value
//     let rataMiesieczna = document.getElementById('l4')
//     let kwotaZOdsetkami = document.getElementById('l5')
//     let oprocentowanieMiesieczne = (oprocentowanie / 12) * 0.01

//     if(isNaN(kwota) || isNaN(iloscRat) || isNaN(oprocentowanie)){
//         infoBtn.style.visibility = 'visible';
//         kwotaZOdsetkami.value = '';
//         rataMiesieczna.value = '';
//         return;
//     }
//     if(!isFinite(kwota) || !isFinite(iloscRat) || !isFinite(oprocentowanie)){
//         infoBtn.style.visibility = 'visible';
//         kwotaZOdsetkami.value = '';
//         rataMiesieczna.value = '';
//         alert('Wprowadzone dane są zbyt duże lub zbyt małe');
//         return;
//     }
//     if(iloscRat < 1){
//         infoBtn.style.visibility = 'visible';
//         kwotaZOdsetkami.value = '';
//         rataMiesieczna.value = '';
//         alert('Ilość rat nie może być mniejsza niż 1');
//         return;
//     }
//     rataMiesieczna.value = ((kwota * oprocentowanieMiesieczne) * (1 + oprocentowanieMiesieczne) ** iloscRat) / ((1 + oprocentowanieMiesieczne) ** iloscRat - 1);
//     kwotaZOdsetkami.value = rataMiesieczna.value * iloscRat;
// }

// rataBtn.onclick = obliczRate

//zadanie 9.2
$(document).ready(function() {
    $('.zawartosc').css('background-color', 'grey');
  
    $('input[type="text"]').css('font-weight', 'bold');
  
    $('input[disabled]').addClass('zielony');

    $('#rata').click(function() {
        $('#infoBtn').css('visibility', 'hidden');

        // pobranie danych z pól formularza
        let kwota = parseFloat($('#l1').val());
        let iloscRat = parseFloat($('#l2').val());
        let oprocentowanie = parseFloat($('#l3').val());
      
        // sprawdzenie, czy wprowadzone dane są poprawne
        if (isNaN(kwota) || isNaN(iloscRat) || isNaN(oprocentowanie)) {
          $('#infoBtn').css('visibility', 'visible');
          $('#l4, #l5').val('');
          return;
        }
        if (!isFinite(kwota) || !isFinite(iloscRat) || !isFinite(oprocentowanie)) {
          $('#infoBtn').css('visibility', 'visible');
          $('#l4, #l5').val('');
          alert('Wprowadzone dane są zbyt duże lub zbyt małe');
          return;
        }
        if (iloscRat < 1) {
          $('#infoBtn').css('visibility', 'visible');
          $('#l4, #l5').val('');
          alert('Ilość rat nie może być mniejsza niż 1');
          return;
        }
      
        // obliczenie raty miesięcznej i całkowitej kwoty z odsetkami
        let oprocentowanieMiesieczne = oprocentowanie / 1200;
        let rataMiesieczna = (kwota * oprocentowanieMiesieczne) / (1 - Math.pow(1 + oprocentowanieMiesieczne, -iloscRat));
        let kwotaZOdsetkami = rataMiesieczna * iloscRat;
      
        // aktualizacja pól wynikowych
        $('#l4').val(rataMiesieczna.toFixed(2));
        $('#l5').val(kwotaZOdsetkami.toFixed(2));
    });
});
  
