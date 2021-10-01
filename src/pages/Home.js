import React, {useState, useEffect} from 'react';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ImageCarousel from '../resources/images/dogCarousel.png';
import DogFood from '../resources/images/petFood.png';
import Bone from '../resources/images/bone.png';
import Farmapet from '../resources/images/healthDog.png';
import CareDog from '../resources/images/careDog.png';
import ToyDog from '../resources/images/ballDog.png';
import AccessorieDog from  "../resources/images/accessories.png";
import PetLover from "../resources/images/petLovers.png";
import {showSlide} from '../js/carousel';
import {getProducts} from '../js/AxiosConfig';
import Product from '../components/Product';
import Footer from '../components/Footer';
import '../components/styles/Home.scss';

document.addEventListener('DOMContentLoaded',()=>{
  if (document.getElementsByClassName('one')[0].classList!==undefined) {
    document.getElementsByClassName('one')[0].classList.add('Home__carouselSelected');
    document.getElementsByClassName("Home__subItemCarousel")[0].style.display = 'block';
  }
})


const Home = () => {
  const [data, setData] = useState(null);

  // Peticion de datos con axios a la api de laravel
  // se guardan en un hook de estado
  useEffect(() => {
    const fetchData = async () => {
      var info = await getProducts();
      setData(info);
    };
    fetchData();
    return () => {};
  }, [setData]);  

  // Metodo para crear los items de productos con
  // el hook de data
  const findItemsProducts = () => {
    var infoProducts = [], arrIDs = [];
    for (let i = 0; i < data.length; i++) {
      if (!arrIDs.includes(data[i].id)) {
          arrIDs.push(data[i].id);
      }
    }
    var obj = {};
    var num = 0;
    for (var j = 0; j < arrIDs.length; j++){
      obj = {};
      num = 0;
      for (let k = 0; k < data.length; k++) {
        if (data[k].id === arrIDs[j]) {
          obj[num] = data[k];
          num = num + 1;
        } 
      }
      infoProducts.push(obj);
    }
    return infoProducts.map((current,index)=>{
      return <Product data={current} key={index}/>
    })
  }

  return (
    <div className="Home__container">
      <Fab className='Home__FabIcon' aria-label="Whatsapp">
        <WhatsAppIcon />
      </Fab>
      <Fab className='Home__FabIconMessage' color='secondary' aria-label="Message">
        <ModeCommentIcon />
      </Fab>
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
      <div className="Home__categories">
        <span className="Home__textCategories">Categor&iacute;a</span>
        <div className="Home__categoriesContainer">
          <div className="Home__categoriesSubContainer">
            <img src={DogFood} alt="DogFood" />
            <span className="Home__subContainerText">Alimento</span>
          </div>
          <div className="Home__categoriesSubContainer">
            <img src={Bone} alt="Bone" />
            <span className="Home__subContainerText">Snacks</span>
          </div>
          <div className="Home__categoriesSubContainer">
            <img src={Farmapet} alt="Farmapet" />
            <span className="Home__subContainerText">Farmapet</span>
          </div>
          <div className="Home__categoriesSubContainer">
            <img src={CareDog} alt="Care" />
            <span className="Home__subContainerText">Cuidado e Higiene</span>
          </div>
          <div className="Home__categoriesSubContainer">
            <img src={ToyDog} alt="Ball" />
            <span className="Home__subContainerText">Juguetes</span>
          </div>
          <div className="Home__categoriesSubContainer">
            <img src={AccessorieDog} alt="Accessories" />
            <span className="Home__subContainerText">Accesorios</span>
          </div>
          <div className="Home__categoriesSubContainer">
            <img src={PetLover} alt="PetLovers" />
            <span className="Home__subContainerText">Para petlovers</span>
          </div>
        </div>
      </div>
      <div className="Home__brands">
        <span className="Home__textCategories">Marcas Destacadas</span>
        <div className="Home__brandsContainer">
          <div className="Home__brandsSubContainer">
            <span className="Home__brandsSubContainerText">A</span>
          </div>
          <div className="Home__brandsSubContainer">
            <span className="Home__brandsSubContainerText">B</span>
          </div>
          <div className="Home__brandsSubContainer">
            <span className="Home__brandsSubContainerText">C</span>
          </div>
          <div className="Home__brandsSubContainer">
            <span className="Home__brandsSubContainerText">D</span>
          </div>
          <div className="Home__brandsSubContainer">
            <span className="Home__brandsSubContainerText">E</span>
          </div>
          <div className="Home__brandsSubContainer">
            <span className="Home__brandsSubContainerText">F</span>
          </div>
        </div>
      </div>
      <div className="Home__ProductsContainer">
        {data!==null && findItemsProducts()}
      </div>
      <Footer/>
      <div className="Footer__AppContainerImages">
        <img src="https://laika.com.co/assets/APP.png" alt="AppleStore" />
        <img src="https://laika.com.co/assets/GOOGLEP.png" alt="GooglePlay" />
        <img src="https://laika.com.co/assets/huaweiGallery.png" alt="HuaweiStore" />
      </div>
    </div>
  )
}

export default Home;
