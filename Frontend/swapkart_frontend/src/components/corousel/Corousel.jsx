import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Corousel.css'
import person from '../../images/person.png'
import swap from '../../images/swap.png'

const Corousel = () => {
    return (
        <Carousel className='mx-3 rounded-lg' fade controls={false} indicators={false}>
            <Carousel.Item interval={5000} className='corousel-item d-flex justify-content-between align-items-center '>
                <img src={person} alt='ship-img' className='corousel-img' />
                <div>
                    <h2 className='text-white mr-5 cor-text'><span style={{ 'fontSize': '70px', color: '#F0FF42' }}>E</span>xchange,<br /><span style={{ 'fontSize': '70px', color: '#F0FF42' }}>E</span>xplore,<br /> <span style={{ 'fontSize': '70px', color: '#F0FF42' }}>E</span>volve<br /><span style={{ 'fontSize': '70px', color: '#F0FF42' }}>W</span>elcome to <span style={{ 'fontSize': '70px', color: '#F0FF42' }}>S</span>wap <span style={{ 'fontSize': '70px', color: '#F0FF42' }}>M</span>arketplace!</h2>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={5000} className='corousel-item d-flex justify-content-between align-items-center '>
                <div>
                    <h2 className='text-white ml-5 cor-text'><span style={{ 'fontSize': '70px', color: '#F0FF42' }}>S</span>wap, smart<br /><span style={{ 'fontSize': '70px', color: '#F0FF42' }}>S</span>wap Savvy,<br /><span style={{ 'fontSize': '70px', color: '#F0FF42' }}>O</span>ne-Stop <span style={{ 'fontSize': '70px', color: '#F0FF42' }}>E</span>xchange <span style={{ 'fontSize': '70px', color: '#F0FF42' }}>D</span>estination</h2>
                </div>
                <img src={swap} alt='ship-img' className='corousel-img' />
            </Carousel.Item>
            <Carousel.Item interval={5000} className='corousel-item d-flex justify-content-between align-items-center '>
                <img src={person} alt='ship-img' className='corousel-img' />
                <div>
                    <h2 className='text-white mr-5 cor-text'><span style={{ 'fontSize': '70px', color: '#F0FF42' }}>C</span>onnect,<br /><span style={{ 'fontSize': '70px', color: '#F0FF42' }}>E</span>xchange,<br /> <span style={{ 'fontSize': '70px', color: '#F0FF42' }}>G</span>row<br /><span style={{ 'fontSize': '70px', color: '#F0FF42' }}>S</span>wap <span style={{ 'fontSize': '70px', color: '#F0FF42' }}>M</span>arketplace <span style={{ 'fontSize': '70px', color: '#F0FF42' }}>B</span>eckons</h2>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default Corousel
