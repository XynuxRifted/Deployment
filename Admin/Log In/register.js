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

// Get references to the registration form and error message elements
const registerForm = document.getElementById('registerForm');
const registerErrorMessage = document.getElementById('registerErrorMessage');

// Add registration form submit event listener
registerForm.addEventListener('submit', (e) => {
e.preventDefault();
const email = registerForm.registerEmail.value;
const password = registerForm.registerPassword.value;

// Create a new user with Firebase Authentication
firebase.auth().createUserWithEmailAndPassword(email, password)
 .then((userCredential) => {
   // User registered successfully
   const user = userCredential.user;
   console.log(user);
   // Redirect to the next page
   window.location.href = "/public/Admin/adminHome.html";
 })
 .catch((error) => {
   // Handle registration errors
   const errorCode = error.code;
   const errorMessage = error.message;
   console.error(errorMessage);
   // Display the error message
   registerErrorMessage.innerText = errorMessage;
 });
});