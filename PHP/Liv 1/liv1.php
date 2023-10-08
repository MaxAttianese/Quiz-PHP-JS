<?php

// Dato un testo, restituire il numero di parole che contengono un numero di lettere dispari
$testo = 'Questo è un testo di esempio per effettuare questo esercizio';

// Soluzione 5

// Codice:

$words = explode(" ", $testo);

$shotsWord = 0;

foreach($words as $word) {

    if(mb_strlen($word, "UTF-8") % 2 !== 0) {

        $shotsWord ++;
    }
}

echo $shotsWord;