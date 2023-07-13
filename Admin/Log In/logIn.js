function logout(){
    window.location.href = "../../index.html";
}


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

  // Get references to the login form and error message elements
  const loginForm = document.getElementById('loginForm');
  const loginErrorMessage = document.getElementById('loginErrorMessage');

  // Add login form submit event listener
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    // Sign in user with Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User signed in successfully
        const user = userCredential.user;
        console.log(user);
        // Redirect to the next page
        window.location.href = "/public/Admin/adminHome.html";
      })
      .catch((error) => {
        // Handle login errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
        // Display the error message
        if (errorCode === "auth/user-not-found") {
          loginErrorMessage.innerText = "Invalid email or password. Please try again.";
        } else {
          loginErrorMessage.innerText = errorMessage;
        }
      });
  });
  function register(){
    window.location.href = "/public/Admin/Log In/register.html";
}

