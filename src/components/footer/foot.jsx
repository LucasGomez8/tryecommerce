import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import './foot.scss'
import { Link } from 'react-router-dom'

export default function Foot() {
  return (
    <div className='cleart bg-secondary mt-auto'>
      <footer className='foot'>
        <div className="container">
          <div className="row">
            <div className="col-md-8 naveg">
              <h4 className='titleFoot__nav'>Navegacion</h4>
              <div className="ulFooter">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/about-us">About Us</Link>
              </div>
            </div>
            <div className="col-md-4 iconfoot">
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
