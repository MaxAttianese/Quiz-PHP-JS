<?php

    use App\Codice\MiaClasse;

    use PHPUnit\Framework\TestCase;

     class MiaClasseTest extends TestCase {

        public function test1() {

            $test1 = new MiaClasse();
        
            $testPrimaFunzione = $test1->primaFunzione();

            $this->assertEquals(2, $testPrimaFunzione);
        
        }

        public function test2() {

            $test2 = new MiaClasse();

            $testSecondaFunzione = $test2->secondaFunzione();

            $this->assertEquals(2, $testSecondaFunzione);
        
        }
     }   
?>