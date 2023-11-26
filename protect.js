document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('submitButton');

  if (submitButton) {
    console.log('Submit button found. Adding event listener.');
    submitButton.addEventListener('click', function () {
      console.log('Button clicked. Calling checkPassword.');
      checkPassword();
    });
  } else {
    console.error('Error: Submit button not found');
  }
});

function checkPassword() {
  console.log('Function called');
  const userInput = document.getElementById('secretCode').value.trim();
  const githubSecret = window.GITHUB_SECRET || 'fallback-secret';

  if (userInput === githubSecret) {
    console.log('Redirecting to Main.html');
    window.location.href = 'Main.html';
  } else {
    console.log('Access denied!');
    alert('Access denied!');
  }
}

// Check if the user manually visits the secret page
if (window.location.pathname.includes('Main.html') && window.GITHUB_SECRET === undefined) {
  window.location.href = 'Index.html';
} else if (window.location.pathname.includes('Index.html') && window.GITHUB_SECRET !== undefined) {
  window.location.href = 'Main.html';
}