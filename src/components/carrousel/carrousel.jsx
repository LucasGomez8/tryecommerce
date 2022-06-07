import { Carousel } from 'react-bootstrap';
import React from 'react';
import './carousel.scss';

export default function BCarrousel() {

  return (
    <div className='carRespon'>
    <Carousel>
        <Carousel.Item>
            <img className="w-100" height="500px" src="https://fotografias.antena3.com/clipping/cmsimages01/2018/10/29/88474E72-3058-4037-ADBA-30FB43FCFDD7/58.jpg" alt="algo" />
        <Carousel.Caption>
                Tu tienda online
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="w-100" height="500px" src="https://media.istockphoto.com/photos/television-smart-tvs-4k-ultra-hd-display-on-shelves-in-eletronic-picture-id902712600?k=20&m=902712600&s=612x612&w=0&h=1x2bZ4-rOb_jes_zGxuHp5I0XiZhZ1BJtULm4d6SQk0=" alt="algo 2" />
        <Carousel.Caption>
            Algo 2
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img  className="w-100" height="500px" src="https://media.istockphoto.com/photos/gold-jewelry-diamond-shop-with-rings-and-necklaces-luxury-retail-picture-id845498088?k=20&m=845498088&s=612x612&w=0&h=xD5ATyrUkW4DfhHr2J883IusB9Yrh3D7kEy3mvOa2iU=" alt="algo 3" />
        <Carousel.Caption>
            Algo 3
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
  )
}
