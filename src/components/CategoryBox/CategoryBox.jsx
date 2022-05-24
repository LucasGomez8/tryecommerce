import React, { useContext } from 'react'
import './CategoryBox.scss'
import Contexto from '../../context/context';

export default function CategoryBox(props){

    const {name} = props;
    const {getFiltered} = useContext(Contexto);


  return (
    <div className='container'>
        <div className="row">
          <div className='col-md-12'>
              <button className='btn btn-secondary catButton' onClick={ () => getFiltered(name)}>{name}</button>
          </div>
        </div>
    </div>
  )
}
