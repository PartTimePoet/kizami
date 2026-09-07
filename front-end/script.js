document.addEventListener('DOMContentLoaded', () => {

  // ── Smooth scroll to hash section on page load ──
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }

  // ── Sign Up / Sign In buttons (for index.html) ──
  const signUpBtn = document.getElementById('btn-signup');
  const signInBtn = document.getElementById('btn-signin');

  if (signUpBtn) {
    signUpBtn.addEventListener('click', () => {
      console.log('Sign Up clicked');
      // The link will automatically navigate to signup.html
    });
  }

  if (signInBtn) {
    signInBtn.addEventListener('click', () => {
      console.log('Sign In clicked');
      // The link will automatically navigate to signin.html
    });
  }

});
