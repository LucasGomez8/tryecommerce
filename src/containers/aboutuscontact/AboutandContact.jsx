import React from 'react'
import './AboutandContact.scss'

export default function AboutandContact() {
  return (
    <div className='container'>
        <div className="row justify-content-center align-items-center mt-5">
            <div className="col-md-6 text-center">
                <h1>¿Quienes Somos?</h1>
                <p>No te voy a mentir, soy un desarrollador que usa este e-commerce como proyecto para presentar en los 
                    ambitos de busqueda laboral. Que intento decir con esto? que este podria llegar a ser tu propio e commerce
                    o en otro caso podriamos arreglar para armarte uno personalizado si asi lo deseas</p>
            </div>
            <div className="col-md-6 cont text-center border">
                <div className='cabeza'>
                    <div className="cara">
                        <div className="detalles"></div>
                    </div>
                </div>
                <div className='cuerpo'></div>
            </div>
        </div>
        
    </div>
  )
}
