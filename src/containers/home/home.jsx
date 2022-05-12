import React from 'react'
import BCarrousel from '../../components/carrousel/carrousel'


export default function Home() {
  return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <BCarrousel></BCarrousel>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-2 m-5 text-center bg-secondary">
            <h4>Productos</h4>
          </div>
          <div className="col-md-2 m-5 text-center bg-secondary">
            <h4>Electronica</h4>
          </div>
          <div className="col-md-2 m-5 text-center bg-secondary">
            <h4>Joyas</h4>
          </div>
        </div>
      </div>
  )
}
