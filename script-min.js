window.onload=function(){const e=document.getElementById("toggle-button"),t=document.querySelector("nav");e.addEventListener("click",function(){t.classList.toggle("active")}),document.querySelector(".content").addEventListener("click",()=>{t.classList.remove("active")})};const peuGyalo=document.getElementById("PeuGyaloCard"),orchestre=document.getElementById("OrchestreCard"),picoloCirco=document.getElementById("PicoloCircoCard"),libellule=document.getElementById("LibelluleCard");peuGyalo.addEventListener("click",()=>{location.href="http://cirquebobof.fr/spectacles/PeuGyalo.html"}),orchestre.addEventListener("click",()=>{location.href="http://cirquebobof.fr/spectacles/Orchestre.html"}),picoloCirco.addEventListener("click",()=>{location.href="http://cirquebobof.fr/spectacles/PicoloCirco.html"}),libellule.addEventListener("click",()=>{location.href="http://cirquebobof.fr/spectacles/Libellule.html"}),window.addEventListener?window.addEventListener("load",loadImages,!1):window.attachEvent&&window.attachEvent("onload",loadImages);