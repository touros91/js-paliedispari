// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function palindroma(parola) {
    var parolaReverse = "";
    for (var i = parola.length - 1; i >= 0; i--) {
            parolaReverse += parola.charAt(i);

    }
    return parolaReverse;
}

var parolaUtente = prompt("Inserisci una parola");
var parolaNuova = palindroma(parolaUtente);

if (parolaUtente == parolaNuova) {
    alert("La parola è palindroma");
} else {
    alert("La parola non è palindroma");
}


// VARIANTE CON IL CICLO WHILE

// function palindroma(parola){
//     var i = parola.length-1;
//     var x = 0;
//     var controllo;

//     while (i > 0 && x < parola.length) {
//     // for (var i = parola.length-1; i > 0; i--) {
//         if (parola.charAt(i) == parola.charAt(x)) {
//             x++;
//             i--;
//             controllo = true;
//         } else {
//             controllo = false;
//             i = 0;
//         }
//     }

//     if (controllo){
//         alert("La parola è palindroma");
//     } else {
//         alert("La parola non è palindroma");
//     }
// }

// var parolaUtente = prompt("Inserisci una parola");
// var controllo = palindroma(parolaUtente);