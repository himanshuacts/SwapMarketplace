import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Wishlist.css";
import axios from 'axios';

const Wishlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch wishes on component mount
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      // Retrieve user details from local storage
      const storedUser = JSON.parse(localStorage.getItem('User'));

      if (storedUser) {
        // Use the user ID from the stored user details
        const userId = storedUser.id; // Update 'userId' to the actual property name in your user object

        const response = await axios.get(`http://localhost:8080/swapkart/Wishlist/${userId}`);
        console.log(response);
        // Extract product IDs from the wishlist response
        const productIds = response.data.map((wishlistItem) => wishlistItem.productId);
        
        // Fetch product details for each product ID
        const productDetailsPromises = productIds.map(async (productId) => {
          const productResponse = await axios.get(`http://localhost:8080/swapkart/products/${userId}/${productId}`);
          return productResponse.data;
        });
        // Wait for all product details requests to complete
        const productDetails = await Promise.all(productDetailsPromises);
        // Combine wishlist data with fetched product details
        const updatedProducts = response.data.map((wishlistItem, index) => ({
          ...wishlistItem,
          productDetails: productDetails[index], // Assuming the fetched product details contain image and name
        }));
        setProducts(updatedProducts);
      } else {
        console.error('User details not found in local storage.');
      }
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  };

  const removeProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/swapkart/Wishlist/wishes/${id}`);
      // After successfully removing the product, fetch the updated wishlist
      fetchWishlist();
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  const clearAllProducts = async () => {
    try {
      // Retrieve user details from local storage
      const storedUser = JSON.parse(localStorage.getItem('User'));

      if (storedUser) {
        // Use the user ID from the stored user details
        const userId = storedUser.id; // Update 'userId' to the actual property name in your user object

        await axios.delete(`http://localhost:8080/swapkart/Wishlist/${userId}`);
        // After successfully clearing all products, fetch the updated wishlist
        fetchWishlist();
      } else {
        console.error('User details not found in local storage.');
      }
    } catch (error) {
      console.error('Error clearing wishlist:', error);
    }
  };



  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card wishlist-container w-50 m-3 mt-5 border-0 shadow-sm">
        <div className="card-header bg-white">
          <h3 style={{ color: "black" }}>Wishlist</h3>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <tbody>
              {products.map((wishlistItem) => (
                <tr key={wishlistItem.productId}>
                  <td>
                    <img
                      src={`data:image/jpeg;base64,${wishlistItem.productDetails.firstImage}`}
                      alt={wishlistItem.productDetails.productName}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "10px",
                      }}
                    />
                  </td>
                  <td style={{ verticalAlign: "middle", paddingRight: "400px" }}>
                    {wishlistItem.productDetails.productName}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => removeProduct(wishlistItem.wishId)}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer bg-white">
          <button className="btn btn-danger" onClick={clearAllProducts}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
