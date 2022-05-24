import React, {useContext, useEffect} from 'react'
import Contexto from '../../context/context';
import uuid from 'node-uuid';
import CategoryBox from '../../components/CategoryBox/CategoryBox';
import Item from '../../components/item/item';

export default function Categories(){

  useEffect(()=>{
    getCategories();
    getProducts();
  },[])

  const { getCategories, category, filtered, getProducts} =useContext(Contexto);


  console.log("Filtrados desde categorias", filtered);
  return (
    <div className='container'>
      <div className="row justify-content-center align-items-center mt-5">
      { 
        category.map((item) => (
          <div className='col-md-3' key={uuid()}>
          <CategoryBox  key={uuid()} name={item}></CategoryBox>
          </div>
        )) 
      }
      </div>
      <div className='row'>
        {

          filtered.map((item)=>(
            <div className="col-md-4 text-center mt-5" key={uuid()}>
              <Item {...item}></Item>
            </div>
          ))
        }
      </div>
    </div>
  )
}
