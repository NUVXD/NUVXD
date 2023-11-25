<?php
$correct_code = "INFINITY";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $entered_code = $_POST["access_code"];

    if ($entered_code === $correct_code) {
        
        include "index.html"; 
        exit;
    } else {
        
        header("Location: login.html");
        exit;
    }
} else {
    
    header("Location: login.html");
    exit;
}