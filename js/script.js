//! CONTACT FORM
//* Form functions
const contactModal = document.getElementById("contact-form");
const formModal = document.getElementById("myForm");

// Open
function openForm() {
    contactModal.style.display = "block";
    formModal.style.display = "block";
}

// Close
function closeForm() {
    contactModal.style.display = "none";
    formModal.style.display = "none";
}

window.addEventListener("keyup", function(event) {
    if (event.keyCode === 27) {
        event.preventDefault();
        contactModal.style.display = "none";
        formModal.style.display = "none";
    }
});

formModal.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('submit').click();
    }
});
// END CONTACT FORM

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
        //! Closes CONTACT modal
    else if (event.target == contactModal) {
        contactModal.style.display = "none";
        formModal.style.display = "none";
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