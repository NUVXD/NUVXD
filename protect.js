document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('submitButton');

  if (submitButton) {
    submitButton.addEventListener('click', checkPassword);
  } else {
    console.error('Error: Submit button not found');
  }
});

function checkPassword() {
  console.log('Function called');
  const userInput = document.getElementById('secretCode').value.trim();
  const githubSecret = window.GITHUB_SECRET || 'fallback-secret';

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