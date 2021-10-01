import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './styles/Footer.scss';

export default function Footer() {
  return (
    <div className="Footer__Container">
      <div className="Footer__ContainerSubItem Footer__ContainerSubItemIconsPrettier">
        <img src="https://laika.com.co/assets/LAIKA.png" alt="DOG" />
        <span>S&iacute;guenos en:</span>
        <div className="Footer__ContainerSubItemIcons">
          <YouTubeIcon/>
          <InstagramIcon/>
          <FacebookIcon/>
        </div>
      </div>
      <div className="Footer__ContainerSubItem">
        <ul>
          <span className="Footer__titleList">Acerca de Laika</span>
          <li>Sobre Laika</li>
          <li>Servicios</li>
          <li>Trabaja con nosotros</li>
          <li>Blog</li>
          <li>Terminos y condiciones</li>
        </ul>
      </div>
      <div className="Footer__ContainerSubItem">
        <ul>
          <span className="Footer__titleList">Links de inter&eacute;s</span>
          <li>Preguntas Frecuentes</li>
          <li>Como comprar en Laika?</li>
          <li>Politica de Privacidad</li>
          <li>Contactanos</li>
          <li>Politicas de Entrega</li>
        </ul>
      </div>
      <div className="Footer__ContainerSubItem">
        <ul>
          <span className="Footer__titleList">Informaci&oacute;n</span>
          <li>Telefono: 3009108496</li>
          <li>servicioclientes@laika.com.co</li>
          <li>Bogot&aacute; D.C., Colombia</li>
        </ul>
      </div>
      <div className="Footer__ContainerSubItem Footer__LastUl">
        <span className="Footer__titleList">Suscr&iacute;bete</span>
        <span className="Footer__titleList-low">Recibe noticias y promociones al instante.</span>
        <input className="Footer__Input" type="text" placeholder="Correo electr&oacute;nico"/>
        <div className="Footer__CheckboxContainer">
          <input className="Footer__Checkbox" type="checkbox" value="He le&iacute;do y acepto las Politicas de privacidad"/>
          <span className="Footer__CheckboxLabel">He le&iacute;do y acepto las Politicas de privacidad</span>
        </div>
      </div>
    </div>
  )
}
