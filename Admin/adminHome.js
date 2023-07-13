var firebaseConfig = {
  apiKey: "AIzaSyBq3daFi8BiyO8GoKTPnw0Fs2tkDtaVCfg",
  authDomain: "admindatabase-394a1.firebaseapp.com",
  databaseURL: "https://admindatabase-394a1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "admindatabase-394a1",
  storageBucket: "admindatabase-394a1.appspot.com",
  messagingSenderId: "1039045656329",
  appId: "1:1039045656329:web:832983db33afe5f2d19dd8"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
// Get a reference to the database service
var database = firebase.database();

function saveText() {
  alert("Text Saved!");
  var text = document.getElementById("textInput").value;database.ref("text").set(text);
}

// Get the initial value of the text from the database
database.ref("text").once("value", function(snapshot) {
  var text = snapshot.val();
  document.getElementById("displayText").innerText = text;
});

// Listen for changes in the text value
database.ref("text").on("value", function(snapshot) {
  var text = snapshot.val();
  document.getElementById("displayText").innerText = text;
});


function logout(){
    window.location.href = "../index.html";
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