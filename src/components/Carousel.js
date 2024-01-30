import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../App.css";

import image1 from '../assets/Carousel1.jpeg';
import image2 from '../assets/Carousel2.jpeg';
import image3 from '../assets/Carousel3.jpeg';

const CustomCarousel = () => {
  return (
    <Carousel
      infiniteLoop
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      autoPlay
      showIndicators={false}
      className='carousel'
    >
      <div>
        <img src={image1} alt="Slide 1" />
      </div>
      <div>
        <img src={image2} alt="Slide 2" />
      </div>
      <div>
        <img src={image3} alt="Slide 3"/>
      </div>
    </Carousel>
  );
};

export default CustomCarousel;
