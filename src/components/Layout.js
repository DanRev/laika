import React from 'react';
import { Link } from "react-router-dom";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './styles/Layout.scss';

function onClickItem(itemNumber) {
  var items = document.getElementsByClassName('HeaderLayout__subItem');
  Object.values(items).forEach((element)=>{
    if(element.classList.contains("HeaderLayout__selected")){
      element.classList.remove("HeaderLayout__selected");
    }
  })
  items[itemNumber].classList.add("HeaderLayout__selected");
}

function Layout() {
  return (
    <div className="HeaderLayout">
      <div className="HeaderLayout__container">
        <div className="HeaderLayout__Upper">
          <div className="HeaderLayout__TextLeft">
            <p><img src="https://laika.com.co/assets/home/secure_mc.svg" alt="SecureIcon" /><span>Compras seguras online <span className="HeaderLayout__TextLeft--LeftBar">|</span></span></p>
            <p><img src="https://laika.com.co/assets/home/wallet_mc.svg" alt="WalletIcon" /><span>Pago contra entrega <span className="HeaderLayout__TextLeft--LeftBar">|</span></span></p>
            <p><img src="https://laika.com.co/assets/home/truck_mc.svg" alt="TruckIcon" /><span>Entregas el mismo dia</span></p>
          </div>
          <div className="HeaderLayout__TextRight">
            <p>Ll&aacute;manos <span>3009108496</span><span className="HeaderLayout__TextLeft--LeftBar">|</span></p>
            <p>Escribenos</p>
            <div className="HeaderLayout__SocialNetworks">
              <img src="https://laika.com.co/assets/home/youtube_mc.svg" alt="YoutubeIcon" />
              <img src="https://laika.com.co/assets/home/facebook_mc.svg" alt="FacebookIcon" />
              <img src="https://laika.com.co/assets/home/instagram_mc.svg" alt="InstagramIcon" />
            </div>
          </div>
        </div>
        <div className="HeaderLayout__Lower">
          <div className="HeaderLayout__containerLower">
            <Link className="HeaderLayout__link" to="/">
              <img src="https://laika.com.co/assets/home/LaikaMascotas.svg" alt="Mascota_Laika" />
              <span className="HeaderLayout__linkName">Laika</span>
            </Link>
            <input className="HeaderLayout__InputText" type="text" placeholder="¿Qu&eacute; necesita tu mascota?"/>
            <div className="HeaderLayout__selectContainer">
              <img src="https://laikapp.s3.amazonaws.com/general/avatar_col.png" alt="Bandera Colombia" />
              <select className='HeaderLayout__select'>
                <option disabled selected className="HeaderLayout__selectedDisable" value='BOG'>BOG</option>
              </select>
            </div>            
          </div>
          <div className='HeaderLayout__accountLog'>
            <div className='HeaderLayout__accountIcon'>
              <PersonOutlineIcon/>
              <span className="HeaderLayout__accountText">Mi Cuenta</span>
            </div>
            <div className="HeaderLayout__shoppingCartContainer">
              <ShoppingCartIcon className="HeaderLayout__shoppingCart"/>
              <span className="HeaderLayout__shoppingCartText">0</span>
            </div>
          </div>
        </div>
      </div>
      <div className="HeaderLayout__subMenu">
        <div className="HeaderLayout__subItem" onClick={()=>{onClickItem(0)}}>
          <img src="https://laika.com.co/assets/home/dog_mc.svg" alt="perro" />
          <span className="HeaderLayout__subItemText">Compra para perro</span>
          <KeyboardArrowRightIcon/>
        </div>
        <div className="HeaderLayout__subItem" onClick={()=>{onClickItem(1)}}>
          <img src="https://laika.com.co/assets/home/cat_mc_s.svg" alt="gato" />
          <span className="HeaderLayout__subItemText">Compra para gato</span>
          <KeyboardArrowRightIcon/>
        </div>
        <div className="HeaderLayout__subItem" onClick={()=>{onClickItem(2)}}>
          <span className="HeaderLayout__subItemText">Ofertas</span>
          <KeyboardArrowRightIcon/>
        </div>
        <div className="HeaderLayout__subItem" onClick={()=>{onClickItem(3)}}>
          <span className="HeaderLayout__subItemText">Servicios</span>
          <KeyboardArrowRightIcon/>
        </div>
        <div className="HeaderLayout__subItem" onClick={()=>{onClickItem(4)}}>
          <span className="HeaderLayout__subItemText">Blog</span>
        </div>        
        <span className="HeaderLayout__textMember">Laika <span id='HeaderLayout__textMemberSecond' className="HeaderLayout__textMemberSecond">Member</span> <div className="HeaderLayout__btn">Adqui&eacute;rela Ya</div></span>
      </div>
    </div>
  )
}

export default Layout;