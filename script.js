const slider = document.querySelector('.memleketim-liste');
const sliderItems = document.querySelectorAll('.memleket-fotolar');
const arrowRight = document.querySelector('.arrow-right');

let activeIndex = 0;

arrowRight.addEventListener('click', () => {
  activeIndex++;
  if (activeIndex >= sliderItems.length) {
    activeIndex = 0;
  }
  slider.style.transform = `translateX(-${activeIndex * sliderItems[0].clientWidth}px)`;
});
