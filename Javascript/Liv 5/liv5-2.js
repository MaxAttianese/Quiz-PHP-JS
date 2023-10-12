
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

function countdown(count) {

    return new Promise((resolve, reject) => {

        let timer = setInterval(() => {

            if(count < 0) {
                reject('Il valore per un conto alla rovescia deve essere maggiore di 0');
                return;
            }

            if(count >= 0) {
        
                console.log(count);
                count--;
        
            }
            if(count == 0) {
                
                console.log(count);        
                clearInterval(timer);
                resolve('Fine');
            }
        },1000);

    })
    
}

countdown(5)
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})


