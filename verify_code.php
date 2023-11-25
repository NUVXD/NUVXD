<?php
$correct_code = "INFINITY";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $entered_code = $_POST["access_code"];

    if ($entered_code === $correct_code) {
        
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