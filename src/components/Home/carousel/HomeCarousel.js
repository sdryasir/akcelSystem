import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Carousel1 from '../../../img/carousel1.jpg';
import Carousel2 from '../../../img/carousel2.jpg';
import Carousel3 from '../../../img/carousel3.jpg';
//import Carousel4 from '../../../img/carousel4.jpg';
import './HomeCarousel.scss';

const HomeCarousel = () => {
  return (
    <div className='home-carousel-wrap'>
      <Carousel fade={true}>
        <Carousel.Item>
          <img className='d-block w-100' src={Carousel1} alt='First slide' />
          <Carousel.Caption>
            <h3>Engineering & Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              incidunt adipisci est. Odio voluptates expedita quidem
              consequuntur ab, eveniet sint.
            </p>
            <a href='#'>Read More</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={Carousel2} alt='Second slide' />
          <Carousel.Caption>
            <h3>Installation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              incidunt adipisci est. Odio voluptates expedita quidem
              consequuntur ab, eveniet sint.
            </p>
            <a href='#'>Read More</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={Carousel3} alt='Third slide' />
          <Carousel.Caption>
            <h3>Home Services</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              incidunt adipisci est. Odio voluptates expedita quidem
              consequuntur ab, eveniet sint.
            </p>
            <a href='#'>Read More</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
