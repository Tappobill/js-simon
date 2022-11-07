let numeri = [];
let numeriGiusti = [];
let randomNumeri = 5;
let numeriRandomHtml = document.getElementById("random");
let risultato = document.getElementById("risultato");




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function numeriRandom() {
    numeri = [];
    while (numeri.length < randomNumeri) {
        let numRandom = getRandomInt(1, 100);
        if (numeri.includes(numRandom) === false) {
            numeri.push(numRandom);
        }
    }
    for (let i = 0; i < numeri.length; i++) {
        numeriRandomHtml.innerHTML += `<div class="box">${numeri[i]}</div>`
    }
}

function play() {
    svuotaGriglia();
    numeriRandom();
    setTimeout(function () {
        numeriRandomHtml.style.display = "none";
    }, 3000);
    setTimeout(function () {
        for (let y = 0; y < 5; y++) {
            let numeroUtente = parseInt(prompt("Scrivi un numero presente nella lista precedente"));
            if (numeri.includes(numeroUtente)) {
                numeriGiusti.push(numeroUtente);
            }
        }
        numeriRandomHtml.style.display="flex";
        risultato.innerHTML=`Il tuo punteggio è: ${numeriGiusti.length}, i numeri indovinati sono: ${numeriGiusti}`
        console.log(numeriGiusti);
    }, 5000);
}

function svuotaGriglia() {
    random.innerHTML = "";
}
