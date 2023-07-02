// When the user scrolls down 30px from the top of the document, resize the navbar's padding
window.onscroll = function() {scrollFunction()};

const navItems = document.getElementsByClassName("nav");
function changeMargin(t,l,b,r) {
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].style.margin = t l b r;
  }
}


function scrollFunction() {
if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
  document.getElementById("navbar").style.padding = "15px 5%";
  document.getElementById("navbar").style.flexDirection = "row";
  document.getElementById("navbar").style.textAlign = "left";
  document.getElementById("subtitle").style.display = "none";

} else {
  document.getElementById("navbar").style.padding = "45px 5%";
  document.getElementById("navbar").style.flexDirection = "column";
  document.getElementById("navbar").style.textAlign = "center";
  document.getElementById("subtitle").style.display = "block";
}
}

//*///////////// dark mode //////////////*//
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   var element = document.getElementById("navbar");
   element.classList.toggle("dark-mode");
}

//*///////////// Modal //////////////*//

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
