
// Realizza un conto alla rovescia partendo da 5 secondi, e che stampi il testo "FINE" dopo che il conto è arrivato a 0.

/* Soluzione:
5
4
3
2
1
0
FINE
*/

// Codice:

let count = 5;

let timer = setInterval(() => {

    if(count > 0) {

        console.log(count);
        count--;

    }
    if(count <= 0) {

        console.log(count);
        console.log('Fine');
        clearInterval(timer);
    }
},1000);
