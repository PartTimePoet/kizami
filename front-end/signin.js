document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signin-form');

  if (!form) {
    console.error('Sign-in form not found!');
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // Simple validation
    if (!username) {
      alert('Please enter your username.');
      return;
    }

    if (!password) {
      alert('Please enter your password.');
      return;
    }

    // All good — redirect to explore page (or wherever you want)
    window.location.href = 'explore.html';
  });
});
