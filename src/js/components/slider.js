const slider = document.querySelector(`.slider`);
const slides = slider.querySelectorAll(`.slider__slide`);
const prevControl = slider.querySelector(`.slider__control:first-child`);
const nextControl = slider.querySelector(`.slider__control:last-child`);

const hideSlides = () => slides.forEach(slide => slide.classList.remove(`slider__slide_active`));

let activeSlideIndex = 0;
const lastSlideIndex = slides.length - 1;

const showPrevSlide = () => {
  activeSlideIndex = activeSlideIndex === 0 ? lastSlideIndex : activeSlideIndex - 1;
  slides[activeSlideIndex].classList.add(`slider__slide_active`);
};

const showNextSlide = () => {
  activeSlideIndex = activeSlideIndex === lastSlideIndex ? 0 : activeSlideIndex + 1;
  slides[activeSlideIndex].classList.add(`slider__slide_active`);
};

const prevControlClickHandler = () => {
  hideSlides();
  showPrevSlide();
};

const nextControlClickHandler = () => {
  hideSlides();
  showNextSlide();
};

prevControl.addEventListener(`click`, prevControlClickHandler);
nextControl.addEventListener(`click`, nextControlClickHandler);
