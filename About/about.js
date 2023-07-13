function openHome(){
    window.location.href = "../index.html";
}

function openAbout(){
    window.location.href = "../About/about.html";
}
function openMap(){
    window.location.href = "../Map/map.html";
}
function openFramework(){
    window.location.href = "../Framework/framework.html";
}

function M(){
    window.location.href = "./MADDEST/M/m.html";
}

function A(){
    window.location.href = "./MADDEST/A/a.html";
}

function D(){
    window.location.href = "./MADDEST/D/d.html";
}

function D1(){
    window.location.href = "./MADDEST/D1/d1.html";
}

function E(){
    window.location.href = "./MADDEST/E/e.html";
}

function S(){
    window.location.href = "./MADDEST/S/s.html";
}

function T(){
    window.location.href = "./MADDEST/T/t.html";
}

function login(){
    window.location.href = "../Admin/Log In/logIn.html";
}

window.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("about-paragraph");
    const newParagraph = localStorage.getItem("aboutDescription");
    
    if (newParagraph) {
      paragraph.textContent = newParagraph;
    }
  
    paragraph.addEventListener("input", function() {
      const editedContent = paragraph.textContent;
      localStorage.setItem("aboutDescription", editedContent);
    });
});
  
