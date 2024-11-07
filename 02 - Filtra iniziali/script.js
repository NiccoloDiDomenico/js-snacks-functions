/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
// console.log(names);

// Dichiara la funzione qui.

/**
 * Definisce un arrey che restituisce le parole che contengono solo una determinata lettera
 * @param {string} arrayToCheck
 * @param {string} letterToCheck
 * @returns {string}
 */
function filterInitials(arrayToCheck, letterToCheck) {

    const result = [];

    for (let i = 0; i < arrayToCheck.length; i++) {
        const currentItem = arrayToCheck[i];
        console.log(currentName);
        
        if (letterToCheck === currentItem[0]) {
            result.push(currentItem)
        } else {
            
        }
    }

    console.log(result);
    return result
    
}

// Invoca la funzione qui e stampa il risultato in console

const firstLetter = filterInitials(names, "A")
console.log(firstLetter);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]