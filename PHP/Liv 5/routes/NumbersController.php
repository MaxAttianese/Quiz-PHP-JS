<?php

require './NumbersModel.php';

class NumberController {

    public $numbers;

    public function __construct() {

        $this->numbers = new NumbersModel();
    }

    public function obtainResults($start, $numbersElement) {

        return $this->numbers->createElement($start, $numbersElement);
    }

}