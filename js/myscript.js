// Inputs
// Chiedo il numero di km
const numeroKm = parseInt(prompt("Inserire il numero di chilometri"));
console.log(numeroKm);

// Chiedo l'età del passeggero
const eta = parseInt(prompt("Inserire l'età"));
console.log(eta);

// Variabili
let prezzo = (numeroKm * 0.21);
let sconto;
let prezzoAttuale;

// Controllo l'età del passeggero
if (eta < 18) {
    console.log("Il passeggero è minorenne, sconto 20%");
    sconto = (prezzo * 20) / 100;
}

else if (eta >= 65) {
    console.log("Il passeggero ha più di 65 anni, sconto 40%");
    sconto = (prezzo * 40) / 100;
}

else {
    console.log("Il passeggero non ha nessuno sconto");
    sconto = 0;
}

// Calcolo il prezzo totale del viaggio
prezzoAttuale = prezzo - sconto;
console.log(prezzoAttuale);

// Arrotondo il prezzo a due cifre decimali
let rounded = Math.round((prezzoAttuale + Number.EPSILON) * 100) / 100;

// Stampo il pezzo del biglietto
document.getElementById("prezzo-id").innerHTML = "Il prezzo totale del biglietto è: " + rounded + " euro";