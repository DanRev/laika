export const showSlide = (image) => {
  var slides = document.getElementsByClassName("Home__subItemCarousel");
  var dots = document.getElementsByClassName("Home__carouselDot");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[image-1].style.display = "block";
  for (var j = 0; j < slides.length; j++) {
    if(dots[j].classList.contains("Home__carouselSelected")){
      dots[j].classList.remove("Home__carouselSelected")
    }
  }
  dots[image-1].classList.add('Home__carouselSelected');
}