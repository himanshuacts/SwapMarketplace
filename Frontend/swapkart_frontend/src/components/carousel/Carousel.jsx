import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../../images/banner.jpg';
import './Carousel.css';

const Carousel = () => {
    return (
        <Carousel className='mx-3 rounded-lg' fade indicators={false}>
            <Carousel.Item interval={5000}>
                <img src={banner} alt='slide' className='carousel-img rounded-lg' />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img src={banner} alt='slide' className='carousel-img rounded-lg' />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img src={banner} alt='slide' className='carousel-img rounded-lg' />
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousel;