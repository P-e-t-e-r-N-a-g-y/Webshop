'use strict';
const menIndexBtn = document.querySelector('.menIndex-btn');
const womenIndexBtn = document.querySelector('.womenIndex-btn');
// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName('img');
    let dots = document.getElementsByClassName('dot');
    let slideLength = 3;

    if(n > slideLength) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slideLength;
    }

    for (let i = 0; i < slideLength; i++){
        slides[i].style.display = 'none';
        dots[i].className = dots[i].className.replace("active", "");
    }
    
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' active';
}

// Set filter to the database
menIndexBtn.addEventListener('click', () => {
    sessionStorage.setItem('category','men');
});
womenIndexBtn.addEventListener('click', () => {
    sessionStorage.setItem('category','women');
});



