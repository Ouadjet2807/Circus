

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




const pgPreview = document.getElementById("peuGyalo-preview");
const oPreview = document.getElementById("lorchestre-preview");
const pcPreview = document.getElementById("picoloCirco-preview");
const lPreview = document.getElementById("libellule-preview");

pgPreview.addEventListener("click", () => {
  location.href = "https://cirquebobof.fr/spectacles/PeuGyalo.html";
});

oPreview.addEventListener("click", () => {
  location.href = "https://cirquebobof.fr/spectacles/Orchestre.html";
});

pcPreview.addEventListener("click", () => {
  location.href = "https://cirquebobof.fr/spectacles/PicoloCirco.html";
});

lPreview.addEventListener("click", () => {
  location.href = "https://cirquebobof.fr/spectacles/Libellule.html";
});