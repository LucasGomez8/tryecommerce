import React, { useContext, useEffect } from 'react'
import Item from '../../components/item/item'
import Contexto from '../../context/context'

export default function Products() {
  
  useEffect(()=>{
    getProducts();
  },[]);

  const {getProducts, products} = useContext(Contexto);

  return (
    <div className='container mb-5'>
      <div className="row justify-content-center align-items-center">
      {products.map((item) => (
        <>
        <div className="col-md-4 text-center mt-5">
          <Item {...item}></Item>
        </div>
        </>
      ))}
       </div>
    </div>
  )
}
