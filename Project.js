const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginLink.addEventListener('click', () => {
  // Add exiting animation to signup form
  signupForm.classList.remove('active');
  signupForm.classList.add('exiting');

  // Wait for the animation to complete before showing login form
  setTimeout(() => {
    signupForm.classList.remove('exiting');
    loginForm.classList.add('active');
  }, 500); // Match the animation duration (0.5s)
});

signupLink.addEventListener('click', () => {
  // Add exiting animation to login form
  loginForm.classList.remove('active');
  loginForm.classList.add('exiting');

  // Wait for the animation to complete before showing signup form
  setTimeout(() => {
    loginForm.classList.remove('exiting');
    signupForm.classList.add('active');
  }, 500); // Match the animation duration (0.5s)
});
