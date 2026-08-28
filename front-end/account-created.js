document.addEventListener('DOMContentLoaded', () => {
  // Optional: Auto-redirect to sign-in page after 6 seconds
  let countdown = 6;
  const signInBtn = document.querySelector('.btn-signin');

  const interval = setInterval(() => {
    countdown--;
    if (countdown <= 0) {
      clearInterval(interval);
      window.location.href = 'signin.html';
    }
  }, 1000);

  // Cancel auto-redirect if user clicks the button early
  if (signInBtn) {
    signInBtn.addEventListener('click', () => {
      clearInterval(interval);
    });
  }
});
