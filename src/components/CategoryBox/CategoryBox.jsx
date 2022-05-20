import React from 'react'

export default function CategoryBox(props){

    const {name} = props;

    const hanldeFiltered = (value) => {
        props.getFiltered(value);
    }

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-2">
               <input type="button" value={name} placeholder={name} onChange={e => hanldeFiltered(e.target.value)} />
            </div>
        </div>
    </div>
  )
}
