import React from 'react';
import { Link } from "react-router-dom";
import {FormControl, NativeSelect} from '@mui/material';
import './styles/Layout.scss';

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
            </Link>
            <input className="HeaderLayout__InputText" type="text" placeholder="¿Qu&eacute; necesita tu mascota?"/>
          </div>
          <div>
            <div className="HeaderLayout_selectContainer">
              <img src="https://laikapp.s3.amazonaws.com/general/avatar_col.png" alt="Bandera Colombia" />
              <select name="" id="" className='HeaderLayout__select' label="Hola">
                <option disabled selected className="HeaderLayout__selectedDisable">BOG</option>
                <option value=""></option>
              </select>
            </div>
            {/* <FormControl sx={{ m: 1 }} variant="standard">
              <NativeSelect
                id="demo-customized-select-native"
                label="Customized"
              >
                <option aria-label="None" value="" />
                <option value={10}></option>
                <option value={20}></option>
                <option value={30}></option>
              </NativeSelect>
            </FormControl> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout;