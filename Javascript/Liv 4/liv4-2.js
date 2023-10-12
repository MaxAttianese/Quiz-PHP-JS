
// data una lista di numeri, scrivi una funzione che restituisca il fattoriale di ogni numero passato come parametro, ottimizzando e utilizzando meno codice possibile

const lista = [5, 10, 8, 7, 2];

/* Soluzione: 
  [ 120, 3628800, 40320, 5040, 2 ]
*/

// Codice:
function getFactorial(number) {

  if(number < 0) {

    return 'Errore il fattoriale si calcola solo per i numeri positivi';
  }
  
  if(number === 0) {

    return 1;
  }

  return number*(getFactorial(number-1));
}

let result = lista.map((el) => getFactorial(el));

console.log(result);