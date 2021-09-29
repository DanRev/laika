import React from 'react';
import ImageCarousel from '../resources/images/dogCarousel.png';
import {showSlide} from '../js/carousel';
import '../components/styles/Home.scss';

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementsByClassName('one')[0].classList.add('Home__carouselSelected');
  document.getElementsByClassName("Home__subItemCarousel")[0].style.display = 'block';
})


function Home() {
  return (
    <div className="Home__container">
      <div className="Home__carousel">
        <div className="Home__subItemCarousel fade">
          <img src={ImageCarousel} alt="" />
        </div>
        <div className="Home__subItemCarousel fade">
          <img src="https://laikapp.s3.amazonaws.com/dev_images_banners/1632415676CO%20%20banners%20adquisicion%2030dcto_Mesa%20de%20trabajo%201%20copia%2016%20copy%205%20%281%29.png" alt="" />
        </div>
        <div className="Home__subItemCarousel fade">
          <img src={ImageCarousel} alt="" />
        </div>
        <div className="Home__subItemCarousel fade">
          <img src='https://laikapp.s3.amazonaws.com/dev_images_banners/1632415676CO%20%20banners%20adquisicion%2030dcto_Mesa%20de%20trabajo%201%20copia%2016%20copy%205%20%281%29.png' alt="" />
        </div>
        <div className="Home__carouselController">
          <span className="Home__carouselDot one" onClick={()=>{showSlide(1)}}></span>
          <span className="Home__carouselDot two" onClick={()=>{showSlide(2)}}></span>
          <span className="Home__carouselDot three" onClick={()=>{showSlide(3)}}></span>
          <span className="Home__carouselDot four" onClick={()=>{showSlide(4)}}></span>
        </div>
      </div>
    </div>
  )
}

export default Home;
