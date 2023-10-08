
// Dato l'url "https://jsonplaceholder.typicode.com/users" creare una funzione asyncrona che restituisca l'output in json
// e successivamente utilizzare tale funzione per stampare in console tutti i nomi degli utenti ottenuti
// Utilizzare nodefetch@2 per effettuare la chiamata (npm install node-fetch@2)

/* Soluzione:
Leanne Graham
Ervin Howell
Clementine Bauch
Patricia Lebsack
Chelsey Dietrich
Mrs. Dennis Schulist
Kurtis Weissnat
Nicholas Runolfsdottir V
Glenna Reichert
Clementina DuBuque
*/

// Codice:

import fetch from 'node-fetch';

console.log(fetch);

function getData(url) {

    fetch(url)
        .then((response) => response.json())
        .then((data) => data.forEach((el) => {
            console.log(el.name);
        }))
        .catch((err) => { console.log(err); })
}

getData("https://jsonplaceholder.typicode.com/users");

// Metodo alternativo

/*async function getData(url) {

    let data = [];

    try {

        let response = await fetch(url);
        data = await response.json();

    } catch (error) {
        console.log('Si è verificato un Errore')      
    }

    data.forEach((el) => {
        console.log(el.name);
    });

}

getData("https://jsonplaceholder.typicode.com/users");*/