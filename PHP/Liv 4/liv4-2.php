<?php

// Data la seguente interfaccia e classe astratta, implementare due classi concrete per ottenere il risultato indicato

interface IPlayer
{
    public static function play();
}

abstract class Player implements IPlayer
{
    public static function play() {
        echo "Playing...". get_called_class() .PHP_EOL;
    }
}


/* Risultato:
Playing...Youtube
Playing...Spotify
*/

// Codice:

class Youtube extends Player implements IPlayer {
}

class Spotify extends Player implements IPlayer {
}

$youtube = new Youtube;
$spootify = new Spotify;

$youtube->play();
$spootify->play();