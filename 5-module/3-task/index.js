function initCarousel() {
  let inner = document.querySelector('.carousel__inner');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  
  let slideWidth = inner.offsetWidth;
  let currentSlide = 0;
  let totalSlides = 4;
  
  function updateArrows() {
    if (currentSlide === 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    }
    
    if (currentSlide === totalSlides - 1) {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    }
  }
  
  arrowRight.addEventListener('click', function() {
    currentSlide++;
    inner.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
    updateArrows();
  });
  
  arrowLeft.addEventListener('click', function() {
    currentSlide--;
    inner.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
    updateArrows();
  });
  
  updateArrows();
}

initCarousel();
