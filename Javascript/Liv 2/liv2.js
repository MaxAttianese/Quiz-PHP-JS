
// Data una lista di parole, restituire le parole che sono palindrome

const lista = [
    'anna',
    'ciao',
    'fabio',
    'stefano',
    'osso',
    'radar',
];

// Soluzione: [ 'anna', 'osso', 'radar' ]

// Codice: 
let palindrome = [];

lista.forEach((el) => {

    let arr = el.split("");
    let arrContr = arr.reverse();
    let strContr = arrContr.join("");

    if(el === strContr) {

        palindrome.push(el)
    }
  
})

console.log(palindrome);