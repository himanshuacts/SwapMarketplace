import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Wishlist.css";

const Wishlist = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      image:
        "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Product 2",
      image:
        "https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Product 3",
      image:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const clearAllProducts = () => {
    setProducts([]);
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
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.image}
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
                      onClick={() => removeProduct(product.id)}
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
