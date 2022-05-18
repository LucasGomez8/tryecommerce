import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import './cartitem.scss'

export default function CartItem(props) {
  
  const {id, title,price, image}  = props[0];
  const handleDelete = () => {
    props.deleteCarrito(id);
  }

  return (
    <div className="container containerCart">
      <div className="row align-items-center">
      <div className="col-md-4 border">
        <img className='imageCart' src={image} alt="" />
        <h4 className='titleCart'>{title}</h4>
      </div>
      <div className="col-md-4 border">
        cantidades
      </div>
      <div className="col-md-2 border">
        <p>${price}</p>
      </div>
      <div className='col-md-2 border'>
        <FontAwesomeIcon className='cartitem__icon' icon={faTrash} onClick={handleDelete}></FontAwesomeIcon>
      </div>
      </div>
    </div>
  )
}
