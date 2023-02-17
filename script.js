'use strict';
// Login
let loginBox = document.getElementById('login-box');
let main = document.getElementById('main');

document.querySelector('.login-btn').addEventListener('click', () => {
    loginBox.style.display = 'block';
    main.style.opacity = 0.4;
})

document.querySelector('.close-btn').addEventListener('click', () => {
    loginBox.style.display = 'none';
    main.style.opacity = 1;
})

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
    console.log(slideIndex);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('img');
    let dots = document.getElementsByClassName('dot');
    let slideLength = 3;
    console.log(`Slide lenght: ${slides.lenght}`);
    if(n > slideLength) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slideLength;
        console.log(`If n < 1 ${slideIndex}`);
    }

    for (i = 0; i < slideLength; i++){
        slides[i].style.display = 'none';
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' active';
}