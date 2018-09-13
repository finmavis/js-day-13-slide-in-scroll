// Debounce scroll windows
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Get all images
const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    // Halfway through the image
    const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 2);
    // Bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShow = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShow && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  }); 
}

window.addEventListener('scroll', debounce(checkSlide));