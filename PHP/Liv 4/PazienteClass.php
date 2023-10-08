<?php

    require './PersonaClass.php';

    class Paziente extends Persona {


        public $figli = [];

        public function __construct($paziente)
        {
      
          parent::__construct($paziente);
      
          $figliElement = $paziente->getElementsByTagName('figlio');
          $figliRes = [];
          
          foreach ($figliElement as $figlio) {
            $figlioData = new Persona($figlio);
            array_push($figliRes, $figlioData);
          }
          $this->figli = $figliRes;
        }
    }

?>