<?php

// Dato un codice HTML, ottenere un array associativo contenente il nome e cognome della persona indicata

$html = <<<EOF
    <html>
        <head>
            <title>Test</title>
        </head>

        <body>
            <table>
                <tr>
                    <td>Nome</td>
                    <td>Cognome</td>
                </tr>
                <tr>
                    <td>Mario</td>
                    <td>Rossi</td>
                </tr>
            </table>
        </body>
    </html>
EOF;

/* Soluzione
Array
(
    [Nome] => Mario
    [Cognome] => Rossi
)
*/


// Codice:

$dom = new DOMDocument;
$dom->loadHTML($html);

$table = $dom->getElementsByTagName('table');

$keys = $table[0]->firstElementChild;
$elements = $table[0]->lastElementChild;

$result[$keys->firstElementChild->nodeValue] = $elements->firstElementChild->nodeValue;
$result[$keys->lastElementChild->nodeValue] = $elements->lastElementChild->nodeValue;


var_dump($result);