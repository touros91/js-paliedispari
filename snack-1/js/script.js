// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1. creo una funzione che genera e ritorna una stringa al contrario, attraversando AL CONTRARIO la stringa originale e salvando in una nuova stringa vuota lettera per lettera 


// VARIANTE CON IL CICLO WHILE

function palindroma(parola){
    var i = parola.length-1;
    var x = 0;
    var controllo;

    while (i > 0 && x < parola.length && controllo != false) {
        if (parola.charAt(i) == parola.charAt(x)) {
            x++;
            i--;
            controllo = true;
        } else {
            controllo = false;
        }
    }

    if (controllo){
        alert("La parola è palindroma");
    } else {
        alert("La parola non è palindroma");
    }
}

var parolaUtente = prompt("Inserisci una parola");
var controllo = palindroma(parolaUtente);

// VARIANTE CON IL CICLO FOR 

// function palindroma(parola) {
//     var parolaReverse = "";
//     for (var i = parola.length - 1; i >= 0; i--) {
//             parolaReverse += parola.charAt(i);

//     }
//     return parolaReverse;
// }

// var parolaUtente = prompt("Inserisci una parola");
// var parolaNuova = palindroma(parolaUtente);

// // 2. controllo se la parola inserita dall'utente è palindroma ovvero se è uguale alla stessa parola in modo invertito

// if (parolaUtente == parolaNuova) {
//     alert("La parola è palindroma");
// } else {
//     alert("La parola non è palindroma");
// }
