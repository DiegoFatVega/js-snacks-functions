/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
let Array_di_iniziali = [];

function prendi_iniziali (array){
    for(let i = 0; i < names.length; i ++){
        const name = array[i];
        Array_di_iniziali.push(name.charAt(0));
    }
    return Array_di_iniziali;
}

const iniziali = prendi_iniziali(names);

// Invoca la funzione qui e stampa il risultato in console
console.log(iniziali);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]