
// data una lista di numeri, sommarli per ottenere il totale

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// soluzione 
// sum = 45
// Codice:

let sum = 0;

lista.forEach ((el) => {

    sum += el;
});

console.log(sum);