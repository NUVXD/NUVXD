// protect.js

const secretCode = process.env.CODE;

document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', checkPassword);
});

function checkPassword() {
  console.log('Function called');
  const userInput = document.getElementById('secretCode').value.trim(); // Trim whitespace
  console.log('User input:', userInput);
  console.log('Secret code:', secretCode);

  if (userInput === secretCode) {
    console.log('Redirecting to Main.html');
    window.location.href = 'Main.html';
  } else {
    console.log('Access denied!');
    alert('Access denied!');
  }
}

// Check if the user manually visits the secret page
if (window.location.pathname.includes('Main.html') && secretCode === undefined) {
  console.log('Manual visit to secret page. Redirecting to Index.html');
  window.location.href = 'Index.html';
} else if (window.location.pathname.includes('Index.html') && secretCode !== undefined) {
  console.log('Manual visit to access page. Redirecting to Main.html');
  window.location.href = 'Main.html';
}