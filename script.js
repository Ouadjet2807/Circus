

window.onload = function () {
  const toggleButton = document.getElementById("toggle-button");
  const navBar = document.querySelector("nav");

  toggleButton.addEventListener("click", show);

  function show() {
    navBar.classList.toggle("active");
  } 
  // REMOVE NAV IF CLICK ON THE PAGE CONTENT

  const content = document.querySelector(".content");

  content.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
};

// OPEN CARD ON CLICK

const peuGyalo = document.getElementById("PeuGyaloCard");
const orchestre = document.getElementById("OrchestreCard");
const picoloCirco = document.getElementById("PicoloCircoCard");
const libellule = document.getElementById("LibelluleCard");

peuGyalo.addEventListener("click", () => {
  location.href = "http://cirquebobof.fr/spectacles/PeuGyalo.html";
});

orchestre.addEventListener("click", () => {
  location.href = "http://cirquebobof.fr/spectacles/Orchestre.html";
});

picoloCirco.addEventListener("click", () => {
  location.href = "http://cirquebobof.fr/spectacles/PicoloCirco.html";
});

libellule.addEventListener("click", () => {
  location.href = "http://cirquebobof.fr/spectacles/Libellule.html";
});

function loadImages() {
    var imgs = document.getElementsByTagName('img');
    for (var i = 0; i < imgs.length; i++) {
        if (imgs[i].getAttribute('data-src')) {
            imgs[i].setAttribute('src', imgs[i].getAttribute('data-src'));
        }
    }
}
 
if (window.addEventListener) { window.addEventListener("load", loadImages, false); }
else if (window.attachEvent) { window.attachEvent("onload", loadImages); }