<?php


require './NumbersController.php';

$start = $_GET['n'] ?? '';
$numbersElement = $_GET['e'] ?? '';


if ($start !== null && $numbersElement !== null) {

    $data = new NumberController();

    $response = $data->obtainResults($start, $numbersElement);

    header('Content-Type: application/json');
    echo json_encode($response);
} else {

    http_response_code(404);
    echo "Percorso non trovato o paramentri mancanti";
};