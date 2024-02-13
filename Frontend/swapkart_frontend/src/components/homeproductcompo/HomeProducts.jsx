import React from 'react'
import ProductCard from '../productcard/ProductCard'
import './HomeProducts.css'
import prod from '../../images/prod.jpg'
import prod1 from '../../images/prod1.jpg'
import prod2 from '../../images/prod2.jpg'
import prod3 from '../../images/prod3.jpg'

const HomeProducts = () => {
    return (
        <div className='container-fluid p-0'>
            <div className='row mx-3 my-5 p-4 home-card-row d-flex flex-column'>
                <h2 className='mb-4' style={{ color: 'black' }}>New Arrival</h2>
                <div className='d-flex justify-content-around'>
                    <a href='/products/1' className='text-decoration-none '><ProductCard img={prod} prodName={"Apple iPhone 13"} prodDesc={'iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. '} /></a>
                    <a href='/products/2' className='text-decoration-none '><ProductCard img={prod1} prodName={"Apple iPhone 13"} prodDesc={'iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. '} /></a>
                    <a href='/products/3' className='text-decoration-none '>
                        <ProductCard img={prod2} prodName={"Apple iPhone 13"} prodDesc={'iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. '} /></a>
                    <a href='/products/4' className='text-decoration-none '>
                        <ProductCard img={prod3} prodName={"Apple iPhone 13"} prodDesc={'iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. '} /></a>
                </div>
            </div>

        </div>
    )
}

export default HomeProducts
