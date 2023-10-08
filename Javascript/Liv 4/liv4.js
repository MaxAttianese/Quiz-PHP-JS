
// scrivi una funzione che estragga la sequenza di fibonacci fino al valore N (parametro della funzione)

/* Soluzione: console.log(fibonacci(10));
    [
  1,  1,  2,  3,  5,
  8, 13, 21, 34, 55
]
*/

// Codice:

let sequence = [];
let x = 0;
let y = 1;

function sequenceFibonacci(n) {

  for(let i = 1; i < n; i++) {

    if (i == 0) {

      sequence.push(0);
      
    }

    if (i == 1) {

      sequence.push(1);
      
    }

    let sum = x + y;

    x = y;

    y = sum;

    sequence.push(sum);


  }
  
}

sequenceFibonacci(10);
console.log(sequence);