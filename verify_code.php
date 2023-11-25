<?php
$correct_code = "your_secret_code"; // Replace with your desired access code

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $entered_code = $_POST["access_code"];

    if ($entered_code === $correct_code) {
        // Correct code, allow access to the website content
        include "your_protected_page.html"; // Replace with your actual page
        exit;
    } else {
        // Incorrect code, redirect back to the login page
        header("Location: login.html");
        exit;
    }
} else {
    // If someone tries to access verify_code.php directly, redirect them to the login page
    header("Location: login.html");
    exit;
}