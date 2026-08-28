document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signup-form');

  if (!form) {
    console.error('Signup form not found!');
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const reEmail = document.getElementById('re-email').value.trim();
    const password = document.getElementById('password').value;
    const rePassword = document.getElementById('re-password').value;

    // Validation
    if (email !== reEmail) {
      alert('Email addresses do not match!');
      return;
    }

    if (password !== rePassword) {
      alert('Passwords do not match!');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }

    // All good — go to account created page
    window.location.href = 'account-created.html';
  });
});
