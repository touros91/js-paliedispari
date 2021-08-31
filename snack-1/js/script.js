// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


function palindroma(parola){
    var controllo;
    for (var i = parola.length-1; i > 0; i--) {
        for (var x = 0; x < parola.length; x++) {
            if (parola.charAt(i) == parola.charAt(x)) {
                controllo = true;
            } else {
                controllo = false;
                i = 0;
            }
        }
    }
    if (controllo){
        alert("La parola è palindroma");
    } else {
        alert ("La parola non è palindroma");
    }
}

var parolaUtente = prompt("Inserisci una parola");
var risultato = palindroma(parolaUtente);




// VARIANTE CON IL CICLO WHILE

// var parola = prompt("Inserisci una parola");

// console.log(parola.length);
// var i = parola.length-1;
// var x = 0;

// var controllo = true;

// while (i > 0 && x < parola.length) {
// // for (var i = parola.length-1; i > 0; i--) {
//     if (parola.charAt(i) == parola.charAt(x)) {
//         x++;
//         i--;
//         controllo = true;
//     } else {
//         controllo = false;
//         i = 0;
//     }
// }

// if (controllo){
//     alert("uguale");
// } else {
//     alert ("diverso");
// }