// protect.js

const secretCode = process.env.CODE; // Retrieve the secret code from GitHub Secrets

function checkPassword() {
  const userInput = document.getElementById('secretCode').value;

  if (userInput === secretCode) {
    // Correct code, redirect to secret page
    window.location.href = 'main.html'; // Update 'secret-page.html' with your actual secret page URL
  } else {
    // Incorrect code, stay on the same page
    alert('Access denied!'); // You can customize this message or add your logic here
  }
}

// Check if the user manually visits the secret page
if (window.location.href.includes('main.html')) {
  // Redirect back to the access page
  window.location.href = 'index.html'; // Update 'index.html' with your actual access page URL
}