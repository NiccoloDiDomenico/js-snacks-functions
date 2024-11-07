/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

/**
 * Description
 * @param {string} wordToCheck
 * @returns {string}
 */
function vowelCount(wordToCheck) {

    const vocal = ["a", "e", "i", "o", "u"];
    console.log(vocal);
    
    let count = 0;

    for (let i = 0; i < wordToCheck.length; i++) {
        const currentItem = wordToCheck[i];
        console.log(currentItem);

        if (vocal.includes(currentItem.toLowerCase()))
        count++
    }
    
    console.log(count);
    return count

}

// Invoca la funzione qui e stampa il risultato in console
const vocaleCount = vowelCount(word)
console.log(vocaleCount);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)