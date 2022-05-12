import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import './foot.scss'

export default function Foot() {
  return (
    <div className='cleart bg-secondary mt-auto'>
      <footer className='foot'>
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-md-4">
              <h4 className='titleFoot__nav'>Navegacion</h4>
              <div className="ulFooter">
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">Categories</a>
                <a href="">About Us</a>
              </div>
            </div>
            <div className="col-md-4">
                <h4 className='titleFoot'>Nuestras redes</h4>
                <div className="iconosFooter">
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </div>
  
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
