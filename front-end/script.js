document.addEventListener('DOMContentLoaded', () => {

  // Get the Sign Up and Sign In buttons
  const signUpBtn = document.getElementById('btn-signup');
  const signInBtn = document.getElementById('btn-signin');


  // Sign Up button
  signUpBtn.addEventListener('click', () => {

    console.log('Sign Up clicked');

    // The link will automatically navigate to:
    // signup.html

  });


  // Sign In button
  signInBtn.addEventListener('click', () => {

    console.log('Sign In clicked');

    // The link will automatically navigate to:
    // signin.html

  });

});