import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import AddProductForm from "../addproductform/AddProductForm";
import "./MyProduct.css"; // Import the CSS file

const MyProduct = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 10,
      image:
        "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      image:
        "https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
      image:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleRemoveProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const handleAddProduct = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (formData) => {
    const newProductId = products.length + 1;
    const newProduct = {
      id: newProductId,
      name: formData.productName,
      price: formData.price,
      image: formData.images[0]?.name || "", // Assuming only the first image is used as a thumbnail
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setShowForm(false);
  };

  const clearAllProducts = () => {
    setProducts([]);
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
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
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
                    {product.name}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleRemoveProduct(product.id)}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer bg-white d-flex justify-content-between">
          <button className="btn btn-primary" onClick={handleAddProduct}>
            Add Product
          </button>
          <button className="btn btn-danger" onClick={clearAllProducts}>
            Clear All
          </button>
        </div>
      </div>
      {showForm && <AddProductForm onSubmit={handleFormSubmit} />}
    </div>
  );
};

export default MyProduct;
