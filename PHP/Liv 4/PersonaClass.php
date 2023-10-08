<?php

class Persona {

    public $nome;

    public $cognome;

    public $eta;

    public $alive;

    public function __construct($persona)
    {
        $this->nome = $persona->getElementsByTagName('nome')[0]->nodeValue;
        $this->cognome = $persona->getElementsByTagName('cognome')[0]->nodeValue;
        $this->eta = $persona->getElementsByTagName('eta')[0]->nodeValue;
        $this->alive = $persona->getElementsByTagName('alive')[0]->nodeValue;
    }

}

?>