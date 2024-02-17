import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import './ProductDetails.css';

const ProductDetailsPage = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const { uid, pid } = useParams();

  // Fetch product details from Redux store
  const product = useSelector(state => {
    return state.prodList.data.find(prod => prod.productId == pid && prod.user.userId == uid);
  });

  useEffect(() => {
    // Update selected image when product changes
    if (product) {
      setSelectedImage(product.firstImage);
    }
  }, [product]);

  console.log(product);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleWishlistClick = () => {
  }

  const handleContactOwnerClick = () => {
    console.log('Contact Owner clicked');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div class="card my-5 p-0 pt-5">
      <div class="card-body p-0">
        <div className="product-details-container pl-0">
          <div className="product-images pl-0">
            <img src={`data:image/jpeg;base64,${selectedImage}`} alt={product.productName} className="main-image pl-0" />
            <div className="thumbnail-images">
              <img
                src={`data:image/jpeg;base64,${product.firstImage}`}
                alt={`Thumbnail 1`}
                className={selectedImage === product.firstImage ? 'selected-thumbnail' : ''}
                onClick={() => handleImageClick(product.firstImage)}
              />
              <img
                src={`data:image/jpeg;base64,${product.secondImage}`}
                alt={`Thumbnail 2`}
                className={selectedImage === product.secondImage ? 'selected-thumbnail' : ''}
                onClick={() => handleImageClick(product.secondImage)}
              />
              <img
                src={`data:image/jpeg;base64,${product.thirdImage}`}
                alt={`Thumbnail 3`}
                className={selectedImage === product.thirdImage ? 'selected-thumbnail' : ''}
                onClick={() => handleImageClick(product.thirdImage)}
              />
              {/* {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={selectedImage === image ? 'selected-thumbnail' : ''}
                  onClick={() => handleImageClick(image)}
                />
              ))} */}
            </div>
          </div>
          <div className="product-details">
            <h2>{product.productName}</h2>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <span key={index} className={`star ${index < Math.floor(product.user.rating / 2) ? 'filled-star' : ''}`}>&#9733;</span>
              ))}
              <span className="rating-value">{product.user.rating / 2}/5</span>
            </div>
            <p className='mt-3'>{product.productDescription}</p>
            <p className='m-0'><strong>Brand:</strong> {product.productBrand}</p>
            <p className='m-0'><strong>Price:</strong> ${product.price}</p>
            <p><strong>Posted Date:</strong> {product.postedDate.join("-")}</p>
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
