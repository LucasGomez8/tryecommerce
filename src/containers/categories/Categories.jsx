import React, {useContext, useEffect} from 'react'
import Contexto from '../../context/context';
import uuid from 'node-uuid';
import CategoryBox from '../../components/CategoryBox/CategoryBox';
import CartItem from '../../components/cartitem/cartitem';

export default function Categories(){

  useEffect(()=>{
    getProducts();
  },[])
  
  const { getCategories, category, filtered, getFiltered, getProducts, products} =useContext(Contexto);

  return (
    <div className='container'>
      <div className="row justify-content-center mt-5">
      { 
        category.map((item) => (
          <div className='col-md-2' key={uuid()}>
          <CategoryBox  key={uuid()} name={item} getFiltered={getFiltered}></CategoryBox>
          </div>
        )) 
      }
      </div>
      <div className='row'>
        {
          products.map((item) => {
            <div key={uuid()} className='col-md-6'>
              <CartItem key={uuid()} {...item}></CartItem>
            </div>
          })
        }
      </div>
    </div>
  )
}
