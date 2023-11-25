// protect.js

const secretCode = process.env.CODE; // Retrieve the secret code from GitHub Secrets

function checkPassword() {
  const userInput = document.getElementById('secretCode').value;

  if (userInput === secretCode) {
    // Correct code, allow access or perform necessary actions
    alert('Access granted!'); // You can customize this message or add your logic here
  } else {
    // Incorrect code, deny access or handle accordingly
    alert('Access denied!'); // You can customize this message or add your logic here
  }
}