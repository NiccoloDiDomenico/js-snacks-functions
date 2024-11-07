/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.

/**
 * Definisci un saluto con dei parametri
 * @param {string} nameToCheck
 * @returns {string} 
 */
function greetings(nameToCheck) {
   
    const now = new Date();
    const hours = now.getHours();
    console.log(hours);

    let message;
    if (hours >= 0 && hours < 13) {
        message = `Buongiorno`
    } else if (hours >= 13 && hours <= 17) {
        message = `Buon pomeriggio`
    } else if (hours > 17 && hours > 0) {
        message = `Buonasera`
    }
    console.log(message);

    return `${message} ${nameToCheck}`
}

// Invoca la funzione qui e stampa il risultato in console
    const hello = greetings(name)
    console.log(hello);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.