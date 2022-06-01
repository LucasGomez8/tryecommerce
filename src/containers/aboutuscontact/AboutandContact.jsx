import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import contacto from '../../assets/contacto.png'
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
                <div className='cuerpo'>
                    <div className="mangas">
                        <div className="brazos"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center align-items-center mt-5">
            <div className='col-md-8'>
               <img className='img-responsive img' src={contacto} alt="" />
            </div>
            <div className="col-md-4">
                <h1>Podes contactarme por los siguientes medios</h1>
                <div className="contIcons">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </div>
            </div>
        </div>
        
    </div>
  )
}
