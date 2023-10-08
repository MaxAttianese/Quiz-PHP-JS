<?php

class NumbersModel {

    public function createElement($start, $numbersElement) {

        $elements = [];

        for($i = 0; $i < $numbersElement; $i++) {
    
            $elements[] = intval($start);
    
            $start++;
        }
    
        return $elements;
    }

}