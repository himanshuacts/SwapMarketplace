import React, { useState } from 'react';
import './ProductDetails.css';

const ProductDetailsPage = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleWishlistClick = () => {
  }

  const handleContactOwnerClick = () => {
    console.log('Contact Owner clicked');
  };


  return (
    <div class="card my-5 p-0 pt-5">
      <div class="card-body p-0">
        <div className="product-details-container pl-0">
          <div className="product-images pl-0 ">
            <img src={selectedImage} alt={product.productName} className="main-image pl-0" />
            <div className="thumbnail-images">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={selectedImage === image ? 'selected-thumbnail' : ''}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          </div>
          <div className="product-details">
            <h2>{product.productName}</h2>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <span key={index} className={`star ${index < Math.floor(product.rating / 2) ? 'filled-star' : ''}`}>&#9733;</span>
              ))}
              <span className="rating-value">{product.rating / 2}/5</span>
            </div>
            <p className='mt-3'>{product.productDescription}</p>
            <p className='m-0'><strong>Brand:</strong> {product.productBrand}</p>
            <p className='m-0'><strong>Price:</strong> ${product.price}</p>
            <p><strong>Posted Date:</strong> {product.postedDate.toLocaleDateString()}</p>

          </div>
        </div>
      </div>
      <div class="card-footer bg-white">
        <button type="button" class="btn btn-danger" onClick={handleWishlistClick}>Add To Wishlist</button>
        <button type="button" class="btn btn-primary ml-4" onClick={handleContactOwnerClick}>Contact Owner</button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
