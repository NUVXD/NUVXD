<?php
$correct_code = "infinity";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $entered_code = strtolower($_POST["access_code"]);
    $correct_code_lower = strtolower($correct_code);

    if ($entered_code === $correct_code_lower) {
        include "main.html";
        exit;
    } else {
        header("Location: index.html");
        exit;
    }
} else {
    header("Location: index.html");
    exit;
}