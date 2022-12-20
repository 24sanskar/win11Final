
const passwordInput = document.getElementById('password-input');
const loader = document.getElementById('loader');
const message = document.getElementById('message');

 passwordInput.addEventListener('input', function() {
    // Validate the password input
    if (passwordInput.value == 2424) {
        
        passwordInput.style.display="none";
      // If the password is valid, show the loader
      loader.style.display = 'block';
      message.style.display = 'block';

       window.location.replace("https://glittering-moonbeam-c77c05.netlify.app/");

      // Simulate a delay to show the loader
      setTimeout(function() {
        // After the delay, hide the loader
        loader.style.display = 'none';
        message.style.display = 'none';
      },2000);
      
    }
  });
