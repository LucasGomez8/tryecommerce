import React, { useContext } from 'react'
import Contexto from '../../context/context'
import CartItem from "../../components/cartitem/cartitem"
import uuid from 'node-uuid';

export default function ShopCart() {
    
    const { carrito, deleteCarrito } = useContext(Contexto);

  return (
    <div className='container mb-5'>
      <div className="row justify-content-center align-items-center">
      {carrito.map((item)=>(
          <div>
            <CartItem key={uuid()} {...item}></CartItem>
          </div>  
      ))}
       </div>
    </div>
  )
}
