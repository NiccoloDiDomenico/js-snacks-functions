/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

/**
 * Definisce un arrey con le iniziali di ogni parola dell'arrey fornito
 * @param {string} arrayToCheck
 * @returns {string}
 */
function initialsNames(arrayToCheck) {

    // Creo nuovo arrey vuoto
    const result = [];

    // Creo un ciclo per selezionare ogni elemento dell'arrey da controllare
    for (let i = 0; i < arrayToCheck.length; i++) {
        const currentName = arrayToCheck[i];
        console.log(currentName);

        // Creo una variabile vuota alla quale aggiongerò ogni iniziale di ogni nome
        let firstLetter;

        // Creo una variabile che splitta ogni lettera dell'elemento selezionato nel ciclo 
        let separatedNameArrey = currentName.split("")
        console.log(separatedNameArrey);

        // Creo un sottociclo che seleziona tutte le lettere della variabile "separetedNameArrey"
        for (let i = 0; i < separatedNameArrey.length; i++) {
            firstLetter = separatedNameArrey[0]
            console.log(firstLetter);
        }
        
        // Seleziono solo gli elementi con indice [0] (ossia la prima lettera del nome) e li pusho nell'arrey vuoto
        result.push(firstLetter)
    }
    
    console.log(result);
    return result
}


// Invoca la funzione qui e stampa il risultato in console
initialsNames(names);
console.log(initialsNames(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]


