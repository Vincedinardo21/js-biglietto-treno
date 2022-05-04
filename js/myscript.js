// Chiedo il numero di km
const numeroKm = parseInt(prompt("Inserire il numero di chilometri"));
console.log(numeroKm);

// Chiedo l'età del passeggero
const eta = parseInt(prompt("Inserire l'età"));
console.log(eta);

// Controllo l'età del passeggero
if(eta < 18){
    console.log("Il passeggero è minorenne, sconto 20%");
}

else if(eta >= 65){
    console.log("Il passeggero ha più di 65 anni, sconto 40%");
}

else {
    console.log("Il passeggero non ha nessuno sconto");
}

// Calcolo il prezzo totale del viaggio


// Stampo il pezzo del biglietto