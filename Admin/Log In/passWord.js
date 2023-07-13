// Initialize Firebase
   const firebaseConfig = {
    apiKey: "AIzaSyBq3daFi8BiyO8GoKTPnw0Fs2tkDtaVCfg",
    authDomain: "admindatabase-394a1.firebaseapp.com",
    databaseURL: "https://admindatabase-394a1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "admindatabase-394a1",
    storageBucket: "admindatabase-394a1.appspot.com",
    messagingSenderId: "1039045656329",
    appId: "1:1039045656329:web:832983db33afe5f2d19dd8"
  };
firebase.initializeApp(firebaseConfig);


    // Get references to the change password form and error message elements
    const changePasswordForm = document.getElementById('changePasswordForm');
    const changePasswordErrorMessage = document.getElementById('changePasswordErrorMessage');

    // Add change password form submit event listener
    changePasswordForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = changePasswordForm.email.value;

      // Fetch sign-in methods for the email
      firebase.auth().fetchSignInMethodsForEmail(email)
        .then((signInMethods) => {
          // Check if the user exists
          if (signInMethods.length === 0) {
            changePasswordErrorMessage.innerText = "User does not exist.";
          } else {
            // Send password reset email
            firebase.auth().sendPasswordResetEmail(email)
              .then(() => {
                // Password reset email sent successfully
                console.log("Password reset email sent successfully");
                // Display success message or perform additional actions
              })
              .catch((error) => {
                // Handle password reset errors
                const errorMessage = error.message;
                console.error(errorMessage);
                // Display the error message
                changePasswordErrorMessage.innerText = errorMessage;
              });
          }
        })
        .catch((error) => {
          // Handle fetchSignInMethodsForEmail errors
          const errorMessage = error.message;
          console.error(errorMessage);
          // Display the error message
          changePasswordErrorMessage.innerText = errorMessage;
        });
    });

    function logout(){
      window.location.href = "/public/index.html";
  }
  
  function framework(){
      window.location.href = "./Framework/adminFramework.html";
  }
  
  function about(){
      window.location.href = "./About/adminAbout.html";
  }
  
  function register(){
    window.location.href = "/public/Admin/Log In/register.html"
  }
  function password(){
    window.location.href = "/public/Admin/Log In/passWord.html"
  }