import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../../redux/HomeProducts/Action";
import axios from "axios";
import "./Transactions.css";

const Transactions = () => {
  const dispatch = useDispatch();
  const [transactions, setTransactions] = useState([]);

  // Get products from Redux store
  const products = useSelector((state) => {
    const allProducts = state.prodList.data;
    return allProducts.length > 0 ? allProducts.filter(product => transactions.some(transaction => transaction.ownerProductId == product.productId)) : [];
  });

  useEffect(() => {
    dispatch(fetchProductList()); // Fetch products when component mountsx
  }, [dispatch])

  useEffect(() => {
    fetchAllUserTransactions();
  }, []);

  const fetchAllUserTransactions = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("User"));
      if (storedUser) {
        // Use the user id from the stored user details
        const userId = storedUser.id;
        const response = await axios.get(`http://localhost:8080/swapkart/transactions/${userId}`);
        console.log(response);
        setTransactions(response.data);
      } else {
        console.error("User details not found in local storage.");
      }
    } catch (error) {
      console.error("Error fetching the user transactions : " + error);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card my-product w-50 m-3 mt-5 border-0 shadow-sm">
        <div className="card-header bg-white">
          <h2>Your Transactions</h2>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <tbody>
              {products.map((product) => (
                <tr>
                  <td>
                    <img
                      src={`data:image/jpeg;base64,${product.firstImage}`}
                      alt={product.productName}
                      style={{ width: "50px", height: "50px", borderRadius: "10px" }}
                    />
                  </td>
                  <td
                    style={{ verticalAlign: "middle", paddingRight: "400px"}}
                  >
                    <Link to={`/contact-owner/${product.productId}/${JSON.parse(localStorage.getItem("User")).id}`} className="md-12 text-dark text-decoration-none">
                      {product.productName}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
};

export default Transactions;