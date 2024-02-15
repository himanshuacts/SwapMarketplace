import React from 'react'
import col1 from '../../images/c1.jpg'
import Carousel from 'react-bootstrap/Carousel'
import './Corousel.css'

const Corousel = () => {
    return (
        <Carousel className='mx-3 rounded-lg' fade indicators={false}>
            <Carousel.Item interval={5000}>
                <img src={col1} alt='slide' className='corousel-img rounded-lg'/>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img src={col1} alt='slide' className='corousel-img rounded-lg'/>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img src={col1} alt='slide' className='corousel-img rounded-lg'/>
            </Carousel.Item>
        </Carousel>
    )
}

export default Corousel
