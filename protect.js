// protect.js

document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', checkPassword);
});

function checkPassword() {
  const userInput = document.getElementById('secretCode').value.trim();
  const githubSecret = window.GITHUB_SECRET || 'fallback-secret'; // Use a fallback or handle missing secret gracefully

  if (userInput === githubSecret) {
    window.location.href = 'Main.html';
  } else {
    alert('Access denied!');
  }
}

// Check if the user manually visits the secret page
if (window.location.pathname.includes('Main.html') && window.GITHUB_SECRET === undefined) {
  window.location.href = 'Index.html';
} else if (window.location.pathname.includes('Index.html') && window.GITHUB_SECRET !== undefined) {
  window.location.href = 'Main.html';
}