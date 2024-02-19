import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./MyProduct.css"; // Import the CSS file

const MyProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch my products on component mount
    fetchMyProducts();
  }, []);

  const fetchMyProducts = async () => {
    try {
      // Retrieve user details from local storage
      const storedUser = JSON.parse(localStorage.getItem("User"));

      if (storedUser) {
        // Use the user id from the stored user details
        const userId = storedUser.id;

        const response = await axios.get(
          `http://localhost:8080/swapkart/products/${userId}`
        );
        setProducts(response.data);
      } else {
        console.error("User details not found in local storage.");
      }
    } catch (error) {
      console.error("Error fetching my products : ", error);
    }
  };

  const removeProduct = async (id) => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("User"));

      if (storedUser) {
        const userId = storedUser.id;
        const response = await axios.delete(
          `http://localhost:8080/swapkart/products/${userId}/${id}`
        );
        console.log(response);
        fetchMyProducts();
      } else {
        console.error("User details not found in local storage.");
      }
    } catch (error) {
      console.error("Error removing product : " + error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card my-product w-50 m-3 mt-5 border-0 shadow-sm">
        <div className="card-header bg-white">
          <h2>My Products</h2>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <tbody>
              {products.map((product) => (
                <tr key={product.productId}>
                  <td>
                    <img
                      src={`data:image/jpeg;base64,${product.firstImage}`}
                      alt={product.productName}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "10px",
                      }}
                    />
                  </td>
                  <td
                    style={{ verticalAlign: "middle", paddingRight: "400px" }}
                  >
                    {product.productName}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => removeProduct(product.productId)}
                      style={{ cursor: "pointer" }}
                      className="text-danger"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer bg-white d-flex justify-content-right">
          <Link to="/AddProduct">
            <button className="btn btn-primary">Add Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
