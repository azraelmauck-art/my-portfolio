document.addEventListener("DOMContentLoaded", () => {
  
document.getElementById("glow").onmouseover = function() {mouseOver()};
document.getElementById("glow").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("glow").style.color = "red";
}

function mouseOut() {
  document.getElementById("glow").style.color = "black";
}
    console.log("Page loaded!")
});
