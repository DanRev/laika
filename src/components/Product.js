import React,{ useState, useEffect } from 'react'
import Rating from '@mui/material/Rating';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import numeral from 'numeral';
import clsx from 'clsx';
import { showStyles } from '../js/services';
import './styles/Product.scss';


const Product = (props) =>{

  const [ info , setInfo ] = useState(0);

  useEffect(() => {
    showStyles(props);
  });

  const getDataProduct = (index,attr,current)=>{
    setInfo(index);
    var value = current.target.id+"";
    var newValue = value.substring(0,value.length-2);
    for (let h = 0; h < attr; h++) {
      var element = document.getElementById(newValue+"-"+h);
      element.classList.remove("Product__ItemSelected");
      element.classList.remove("Product__ItemNoSelected");
      if (current.target===element) {
        element.classList.add("Product__ItemSelected");
      }else{
        element.classList.add("Product__ItemNoSelected");
      }
    }
  }

  const formatNumber = (value) => {
    return numeral(value).format('0,0');
  }


  return (
    <div className="Product__Container">
      <div className="Product__ContainerDiscount">
        {props.data[info].descuento!==undefined && <div className="Product__DiscountSpanOver"><img src="https://laika.com.co/assets/star.svg" alt="star" /><span className="Product__DiscountText">{props.data[info].descuento}%</span></div>}
      </div>
      <div className="Product__Image">
        <img src={props.data[info].imgUrl} alt={props.data[info].productName} />
        <div className="Product__TextPriceContainer">
            <p className={clsx("Product__Name",props.data[info].productName.length>26?"Product__NameLong":"")}>{props.data[info].productName}</p>
            <Rating name="half-rating" defaultValue={props.data[info].calificacion}/>
            <div className="Product__PriceContainer">
              <div className="Product__PriceWithoutMember">
                <span>{`$ ${formatNumber(props.data[info].precioNormal)}`}</span>
                <div className="Product__PriceBefore">
                  <span>Antes</span>
                  <span className="Product__PriceBeforeDecoration">{`$ ${formatNumber(props.data[info].precioAntes)}`}</span>
                </div>
              </div>
              <div className="Product__PriceWithMember">
                <span>{`$ ${formatNumber(props.data[info].precioMiembro)}`}</span>
                <span className="Product__textMember"><div className='Product__textController'>Laika <span id='Product__textMemberSecond' className="Product__textMemberSecond">Member</span> </div><div className="Product__btn">Adqui&eacute;rela Ya</div></span>
              </div>
            </div>
          </div>
        </div>
      <div className="Product__ContainerItems">
        {props.data!==undefined && Object.values(props.data).map((current, index)=>{
          return <div className={'Product__Item '+index} id={current.id + '-'+index} key={index} onClick={(e)=>{getDataProduct(index,Object.values(props.data).length,e)}}>{current.tipo}</div>
        })}
      </div>
      <div className="Product__CarShoppingAdd">
        <ShoppingCartIcon/>
        Añadir al carrito
      </div>
    </div>
  )
}

export default Product;
