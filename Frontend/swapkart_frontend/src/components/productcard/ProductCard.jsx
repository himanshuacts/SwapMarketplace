import React, { Fragment } from 'react';
import { LiaStarSolid } from "react-icons/lia";
import avatar from '../../images/avatar.png';
import './ProductCard.css';

const ProductCard = (props) => {
  return (
    <Fragment>
      <div className="card border-0 product-card " style={{ width: '18rem', padding: '0px', height: '370px' }}>
        <img className="card-img-top product-image" src={props.img} />
        <div className="card-body ">
          <h5 className='card-title product-card-title'>{props.prodName}</h5>
          <p className='card-text product-card-desc'>{props.prodDesc}</p>
        </div>
        <div className='card-footer d-flex justify-content-between align-items-center  bg-white'>
          <div className='d-flex align-items-center'>
            <img src={avatar} className='product-card-owner rounded-circle mr-3' />
            <span className='product-owner-name'>{props.owner}</span>
          </div>
          <div className='stars owner-rating-home'>
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default ProductCard
