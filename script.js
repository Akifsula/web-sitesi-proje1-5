const slider = document.querySelector('.memleketim-liste');
const slides = document.querySelectorAll('.memleket-fotolar');
const arrow = document.querySelector('.arrow');

let currentSlide = 0;
const slideWidth = slides[currentSlide].clientWidth;

slider.style.width = slideWidth * slides.length + 'px';

arrow.addEventListener('click', function() {
  if (currentSlide >= slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slider.style.transform = 'translateX(' + (-slideWidth * currentSlide) + 'px)';
});