import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import './foot.scss'
//import './footer.js'
import { Link } from 'react-router-dom'

export default function Foot() {
  return (
    <div className='cleart bg-secondary mt-auto'>
      <footer className='foot'>
        <div className="container">
          <div className="row footres">
            <div className="col-12 col-md-8 naveg" id='naveg'>
              <h4 className='titleFoot__nav'>Navegacion</h4>
              <div className="ulFooter">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/about-us-contact">About Us</Link>
              </div>
            </div>
            <div className="col-12 col-md-4 iconfoot" id="iconfoot">
                <h4 className='titleFoot'>Nuestras redes</h4>
                <div className="iconosFooter">
                  <a href="">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                  </a>
                  <a href="">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a>
                  <a href="">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </a>
                </div>
            </div>
          </div>
          <div className='row justify-content-center align-items-center rights'>
              <div className="col-7 col-md-12 text-center">
                <p> 2022 @All rights reserved || Desarrollado por Gomez Lucas</p>
              </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
