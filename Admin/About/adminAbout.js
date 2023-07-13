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
    var textOne = document.getElementById("textInputOne").value;database.ref("textOne").set(textOne);
  }
  
  // Get the initial value of the text from the database
  database.ref("textOne").once("value", function(snapshot) {
    var textOne = snapshot.val();
    document.getElementById("displayText").innerText = textOne;
  });
  
  // Listen for changes in the text value
  database.ref("textOne").on("value", function(snapshot) {
    var textOne = snapshot.val();
    document.getElementById("displayText").innerText = textOne;
  });

function logout(){
    window.location.href = "../../index.html";
}

function home(){
    window.location.href = "../adminHome.html";
}

function framework(){
    window.location.href = "../Framework/adminFramework.html";
}

function save(){
    const save = document.getElementById("about-input").value;
    localStorage.setItem("aboutDescription", save);
}
function register(){
  window.location.href = "/public/Admin/Log In/register.html"
}