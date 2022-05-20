import React, { useContext, useEffect } from 'react'
import Item from '../../components/item/item'
import Contexto from '../../context/context'
import uuid from 'node-uuid';

export default function Products() {
  
  const {getProducts, products } = useContext(Contexto);
  useEffect(()=>{
    getProducts();
  },[]);
  
  console.log("Productos desde Productos", products );
  return (
    <div className='container mb-5'>
      <div className="row justify-content-center align-items-center">
      {products.map((item) => (
        <div className="col-md-4 text-center mt-5" key={uuid()}>
          <Item key={uuid()} {...item}></Item>
        </div>
      ))}
       </div>
    </div>
  )
}
