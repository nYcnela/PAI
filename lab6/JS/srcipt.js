let rataBtn = document.getElementById('rata')
let infoBtn = document.querySelector('.komunikat')

function obliczRate(){
    infoBtn.style.visibility = 'hidden'
    let kwota = document.getElementById('l1').value
    let iloscRat = document.getElementById('l2').value
    let oprocentowanie = document.getElementById('l3').value
    let rataMiesieczna = document.getElementById('l4')
    let kwotaZOdsetkami = document.getElementById('l5')
    let oprocentowanieMiesieczne = (oprocentowanie / 12) * 0.01
    if((!isNaN(kwota) || isFinite(kwota)) || 
    (!isNaN(iloscRat) || isFinite(iloscRat)) ||
     (!isNaN(oprocentowanie) || isFinite(oprocentowanie))){
        rataMiesieczna.value = ((kwota * oprocentowanieMiesieczne) * (1 + oprocentowanieMiesieczne) ** iloscRat) / ((1 + oprocentowanieMiesieczne) **iloscRat - 1)
        kwotaZOdsetkami.value = rataMiesieczna.value * iloscRat
    }else{
        infoBtn.style.visibility = 'visible'
        kwotaZOdsetkami.value = ''
        rataMiesieczna.value = ''
    }
}

rataBtn.onclick = obliczRate