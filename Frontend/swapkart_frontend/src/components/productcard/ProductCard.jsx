import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { LiaStarSolid } from "react-icons/lia";
import avatar from '../../images/avatar.png';
import './ProductCard.css';

const ProductCard = (product) => {
  return (
    <Fragment>
      <Link to={`/products/${product.uid}/${product.id}`} className="text-decoration-none">
        <div className="card border-0 product-card" style={{ width: '18rem', padding: '0px', height: '370px' }}>
          <img className="card-img-top product-image" src={product.img} alt={product.prodName} />
          <div className="card-body ">
            <h5 className='card-title product-card-title'>{product.prodName}</h5>
            <p className='card-text product-card-desc'>{product.prodDesc}</p>
          </div>
          <div className='card-footer d-flex justify-content-between align-items-center  bg-white'>
            <div className='d-flex align-items-center'>
              <img src={avatar} className='product-card-owner rounded-circle mr-3' alt="Owner Avatar" />
              <span className='product-owner-name'>{product.owner}</span>
            </div>
            <div className='stars owner-rating-home'>
              {[...Array(product.rating)].map((_, index) => (
                <LiaStarSolid key={index} />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  )
}

export default ProductCard;
