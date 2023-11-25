const secretCode = process.env.CODE;

function checkPassword() {
  console.log("function called")
  const userInput = document.getElementById('secretCode').value;
  if (userInput === secretCode) {
    window.location.href = 'Main.html';
  } else {
    alert('Access denied!');
  }
}

// Check if the user manually visits the secret page
if (window.location.pathname.includes('Main.html') && secretCode === undefined) {
  window.location.href = 'Index.html';
} else if (window.location.pathname.includes('Index.html') && secretCode !== undefined) {
  window.location.href = 'Main.html';
}