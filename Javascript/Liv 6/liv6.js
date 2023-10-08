
// utilizza i generatori per stampare una lista dei primi 10 numeri primi

/* Soluzione:
1
2
3
5
7
11
13
17
19
23
*/

// Codice: 

let numbers = 10;

function* firstNumber(n) {

let count = 0;
let i = 1;
let loop = true;

    while(loop) {

        for(let k = 1; k <= i+1; k++) {
    

          if(i % k == 0) {
    
            count++;
          }
    
        }   

        if(count <= 2){
    
          yield i;
    
        }
    
        count = 0;
        i++
    
        if(loop > n) {
    
            loop = false;
        }
    };
}

const number = firstNumber(numbers);

for(let i = 0; i < numbers; i++) {

    console.log(number.next().value);
}