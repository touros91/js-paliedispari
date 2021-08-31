// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var pariODispari = prompt("Scegli Pari o Dispari");
pariODispari = pariODispari.charAt(0).toUpperCase() + pariODispari.slice(1).toLowerCase();

while (!isNaN(pariODispari)) {
    alert("Errore! Devi scegliere inserendo la PAROLA Pari o Dispari");
    var pariODispari = prompt("Scegli Pari o Dispari");
    pariODispari = pariODispari.charAt(0).toUpperCase() + pariODispari.slice(1).toLowerCase();   
}

var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

while (isNaN(numeroUtente)) {
    alert("Errore! Devi inserire un numero da 1 a 5");
    var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
}

while (numeroUtente < 1 || numeroUtente > 5) {
    alert("Errore! Devi inserire un NUMERO da 1 a 5");
    var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
}

console.log(numeroUtente);

function numeroRandom(min, max){
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

var numeroCasuale = numeroRandom(1, 5);
console.log(numeroCasuale);

function somma(num1, num2) {
    var somma = num1 + num2;
    return somma;
}

var somma = numeroUtente + numeroCasuale;
console.log(somma);

function pariDispari(numero) {
    if (numero % 2 == 0) {
        return "Pari";
    } else {
        return "Dispari";
    }
}

console.log(pariDispari(somma));

if (pariODispari == "Pari" && pariDispari(somma) == "Pari" || pariODispari == "Dispari" && pariDispari(somma) == "Dispari" ) {
    alert("Hai vinto!")
} else {
    alert("Ha vinto il Computer!")
}