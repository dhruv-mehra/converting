// When the user scrolls down 30px from the top of the document, resize the navbar's padding
window.onscroll = function() {stick()};

var header = document.getElementById("navbar");
var title = document.getElementById("titleBlock");
var nav = document.getElementById("navBlock");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stick() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.classList.remove("unstuck");
    document.getElementById("subtitle").style.display = "none";
    document.getElementById("title").style.fontSize = "3em";
    document.getElementById("navBlock").style.margin = "0 0 0 0";
    document.getElementById("navBlock").style.justifyContent = "right";
  } else {
    header.classList.remove("sticky");
    header.classList.add("unstuck");
    document.getElementById("subtitle").style.display = "block";
    document.getElementById("title").style.fontSize = "6em";
    document.getElementById("navBlock").style.margin = "50px 0px";
    document.getElementById("navBlock").style.justifyContent = "center";

  }
}
