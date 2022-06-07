import React from 'react'
import BCarrousel from '../../components/carrousel/carrousel'
import mensclothing from "../../assets/mensclothing.jpg"
import electronica from '../../assets/electronica.jpg'
import joyeria from "../../assets/joyeria.jpg"
import womenclothing from '../../assets/womenclothing.png'
import { Link } from 'react-router-dom'

import './home.scss'

export default function Home() {

  const img1 = {
    width: "250px",
    height:"400px",
    objectFit: "cover",
    borderRadius: "7px",
    boxShadow: "1px 2px 6px 0px black"
  }


  return (
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-12 col-md-12 text-center bcar">
            <BCarrousel></BCarrousel>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          
          <div className="col-md-3 text-center bannerCont">
            <Link to='/categories' class="img-fluid">
              <img className='img-fluid' style={img1} src={mensclothing} alt="" />
            </Link>
            <h4 class="img-textHov">Men's Clothing</h4>
          </div>
          <div className="col-md-3 text-center bannerCont">
            <Link to='/categories' class="img-fluid">
              <img className='img-fluid' style={img1} src={electronica} alt="" />
            </Link>
            <h4 class="img-textHov">Electronics</h4>
          </div>
          <div className="col-md-3 text-center bannerCont">
            <Link to='/categories' class="img-fluid">
              <img className='img-fluid' style={img1} src={joyeria} alt="" />
            </Link>
            <h4 class="img-textHov">Jewelery</h4>
          </div>
          <div className='col-md-3 text-center bannerCont'>
            <Link to='/categories' class="img-fluid">
              <img className='img-fluid' style={img1} src={womenclothing} alt="" />
            </Link>
            <h4 class="img-textHov">Women's Clothing</h4>
          </div>
        </div>
      </div>
  )
}
