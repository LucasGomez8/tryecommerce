import React, { useContext, useState } from 'react'
import Contexto from '../../context/context'
import CartItem from "../../components/cartitem/cartitem";
import './ShopCart.scss'
import uuid from 'node-uuid';

export default function ShopCart() {
    
    const { carrito, deleteCarrito} = useContext(Contexto);


    return (
    <div className='container containerShop mt-3'>
      <div className="row justify-content-center align-items-center rowShop">
      {carrito.map((item)=>(
          <div key={uuid()}>
            <CartItem key={uuid()} {...item} deleteCarrito={deleteCarrito}></CartItem>
          </div>  
      ))}
       </div>
       <div className='row justify-content-center align-item-center mt-4'>
         <div className="col-md-8 text-end">
           <h4>Total:</h4>
         </div>
         <div className="col-md-4 text-end">
          <h4>${Math.round(carrito.reduce((amount,item) => amount+= item[0].price,0))}</h4>
          </div>
       </div>
    </div>
  )
}
