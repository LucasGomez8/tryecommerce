import React, { useContext } from 'react'
import Contexto from '../../context/context';
import './item.scss'

export default function Item(props) {
    const {title,price, image, id}=props;
    const { addCarrito } = useContext(Contexto);

  return (
    <div className="imageContainer">
      <img className="imageProducts" src={image} alt="" />
      <hr className='breakLineItem'/>
      <h3 className='titleItem'>{title}</h3>
      <div className='addingProduct mt-4'>
        <p>${price}</p>
        <button className='itemButton' onClick={() =>{
            addCarrito(id);
        }}>+</button>
      </div>
    </div>
  )
}
