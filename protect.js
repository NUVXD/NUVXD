const secretCode = process.env.CODE;

function checkPassword() {
  const userInput = document.getElementById('secretCode').value;
  if (userInput === secretCode) {
    window.location.href = 'Main.html';
  } else {
    alert('Access denied!');
  }
}

if (window.location.pathname.includes('Main.html') && userInput !== secretCode) {
  window.location.href = 'Index.html';
}