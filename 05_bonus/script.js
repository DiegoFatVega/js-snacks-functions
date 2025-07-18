/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function saluto (string){
    let hour = 23;
    if( hour < 13 && hour < 24){
        return `Buongiorno ${string}`
    } else if( hour >= 13  && hour <= 17){
        return `Buon Pomeriggio ${string}`
    } else return `Buonasera ${string}`
}

// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.