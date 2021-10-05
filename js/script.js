//! PROJECTS MODAL
//* Form functions
const projectsModal = document.getElementById("projects-modal");

// Open
function openModal() {
    projectsModal.style.display = "block";
}

// Close
function closeModal() {
    projectsModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == projectsModal) {
    projectsModal.style.display = "none";
  }
}

window.addEventListener("keyup", function(event) {
    if (event.keyCode === 27) {
        event.preventDefault();
        projectsModal.style.display = "none";
    }
});

//* Controls
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("projectSlides");
    var dots = document.getElementsByClassName("demo");
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
}
// END PROJECTS MODAL

//! PHD SLIDESHOW
// Adjusts slide speed
$('.carousel').carousel({
  interval: 3000
});
// END PHD SLIDESHOW

//! COPY FUNCTION
function copy() {
    var copyText = document.createElement("textarea");
    document.body.appendChild(copyText);
    copyText.value = "josephmanghan@gmail.com";
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(copyText);

    $('#copied-success').fadeIn(800).delay(2000).fadeOut(800);
}
// END COPY FUNCTION