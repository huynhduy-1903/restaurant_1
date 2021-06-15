var a = window.pageYOffset;
window.onscroll = function() {
var b = window.pageYOffset;
  if (a > b) {
    document.getElementById("top").style.top = "0";
  } else {
    document.getElementById("top").style.top = "-110px";
  }
  a = b;
}
function openmenu() {
  document.getElementById("mymenu").style.width = "65%";
  document.getElementById("mymenu2").style.width = "0%";
  document.getElementById("mymenu3").style.width = "0%";
  document.getElementById("mymenu4").style.width = "0%";
  document.getElementById("mymenu5").style.width = "0%";
  document.getElementById("mymenu6").style.width = "0%";
  document.getElementById("mymenu7").style.width = "0%";
}
function openmenu2() {
  document.getElementById("mymenu2").style.width = "65%";
  document.getElementById("mymenu").style.width = "0%";
  document.getElementById("mymenu3").style.width = "0%";
  document.getElementById("mymenu4").style.width = "0%";
  document.getElementById("mymenu5").style.width = "0%";
  document.getElementById("mymenu6").style.width = "0%";
  document.getElementById("mymenu7").style.width = "0%";
}
function openmenu3() {
  document.getElementById("mymenu3").style.width = "65%";
  document.getElementById("mymenu").style.width = "0%";
  document.getElementById("mymenu2").style.width = "0%";
  document.getElementById("mymenu4").style.width = "0%";
  document.getElementById("mymenu5").style.width = "0%";
  document.getElementById("mymenu6").style.width = "0%";
  document.getElementById("mymenu7").style.width = "0%";
}
function openmenu4() {
  document.getElementById("mymenu4").style.width = "65%";
  document.getElementById("mymenu").style.width = "0%";
  document.getElementById("mymenu2").style.width = "0%";
  document.getElementById("mymenu3").style.width = "0%";
  document.getElementById("mymenu5").style.width = "0%";
  document.getElementById("mymenu6").style.width = "0%";
  document.getElementById("mymenu7").style.width = "0%";
}
function openmenu5() {
  document.getElementById("mymenu5").style.width = "65%";
  document.getElementById("mymenu2").style.width = "0%";
  document.getElementById("mymenu3").style.width = "0%";
  document.getElementById("mymenu4").style.width = "0%";
  document.getElementById("mymenu").style.width = "0%";
  document.getElementById("mymenu6").style.width = "0%";
  document.getElementById("mymenu7").style.width = "0%";
}
function openmenu6() {
  document.getElementById("mymenu6").style.width = "65%";
  document.getElementById("mymenu2").style.width = "0%";
  document.getElementById("mymenu3").style.width = "0%";
  document.getElementById("mymenu4").style.width = "0%";
  document.getElementById("mymenu5").style.width = "0%";
  document.getElementById("mymenu").style.width = "0%";
  document.getElementById("mymenu7").style.width = "0%";
}

function closemenu() {
  document.getElementById("mymenu").style.width = "0%";
}
function closemenu2() {
  document.getElementById("mymenu2").style.width = "0%";
}
function closemenu3() {
  document.getElementById("mymenu3").style.width = "0%";
}
function closemenu4() {
  document.getElementById("mymenu4").style.width = "0%";
}
function closemenu5() {
  document.getElementById("mymenu5").style.width = "0%";
}
function closemenu6() {
  document.getElementById("mymenu6").style.width = "0%";
}
