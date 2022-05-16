import React from 'react'
import './cartitem.scss'

export default function CartItem(props) {
  
  const {title,price, image}  = props[0];

  const handleDelete = () => {

  }

  return (
    <div className="container containerCart">
      <div className="col-md-4">
        <h4 className='titleCart'>{title}</h4>
        <img className='imageCart' src={image} alt="" />
      </div>
      <div className="col-md-2 priceCart">
        <p>{price}</p>
      </div>
    </div>
  )
}
