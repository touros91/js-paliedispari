// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// 1a. chiedo all'utente di scegliere Pari o Dispari e se minuscolo converto la prima lettera in maiuscolo

var pariODispari = prompt("Scegli Pari o Dispari");
pariODispari = pariODispari.charAt(0).toUpperCase() + pariODispari.slice(1).toLowerCase();

// 1b. controllo se ha inserito numeri al posto di lettere e in caso richiedo di inserire la scelta

while (!isNaN(pariODispari)) {
    alert("Errore! Devi scegliere inserendo la PAROLA Pari o Dispari");
    var pariODispari = prompt("Scegli Pari o Dispari");
    pariODispari = pariODispari.charAt(0).toUpperCase() + pariODispari.slice(1).toLowerCase();   
}

// 2a. chiedo di inserire un numero compreso tra 1 e 5
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

// 2b. se non è un numero chiedo di inserire nuovamente un numero da 1 a 5

while (isNaN(numeroUtente)) {
    alert("Errore! Devi inserire un numero da 1 a 5");
    var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
}

// 2c. controllo se il numero inserito è compreso tra 1 e 5, in caso richiedo di inserirlo nuovamente 

while (numeroUtente < 1 || numeroUtente > 5) {
    alert("Errore! Devi inserire un NUMERO da 1 a 5");
    var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
}

console.log(numeroUtente);

// 3. creo una funzione che genera e ritorna un numero random compreso tra due numeri 

function numeroRandom(min, max){
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

var numeroCasuale = numeroRandom(1, 5);
console.log(numeroCasuale);

// 4. creo una funzione che genera e ritorna la somma tra due numeri 

function somma(num1, num2) {
    var somma = num1 + num2;
    return somma;
}

var somma = numeroUtente + numeroCasuale;
console.log(somma);

// 5. creo una funzione che controlla se un numero è Pari o Dispari e ritorna il risultato come stringa

function pariDispari(numero) {
    if (numero % 2 == 0) {
        return "Pari";
    } else {
        return "Dispari";
    }
}

console.log(pariDispari(somma));

// 6. determino chi ha vinto tra l'utente e il computer confrontando se la scelta Pari/Dispari corrisponde al Pari/Dispari della somma

if (pariODispari == "Pari" && pariDispari(somma) == "Pari" || pariODispari == "Dispari" && pariDispari(somma) == "Dispari" ) {
    alert("Hai vinto!")
} else {
    alert("Ha vinto il Computer!")
}