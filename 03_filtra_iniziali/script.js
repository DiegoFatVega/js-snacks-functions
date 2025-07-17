/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
let NewArray = [];
function filter(array, letter){
    for(let i = 0; i < names.length; i ++){
        const name = names [i];
        for(let j = 0; j < names.length; j ++){
            const char = names [j];
            if(char.toUpperCase === letter.toUpperCase){
                NewArray.push(name)
                break;
            }
        }
    }
    return NewArray;
}


// Invoca la funzione qui e stampa il risultato in console
const x = filter(names, 'A')
console.log(x);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]