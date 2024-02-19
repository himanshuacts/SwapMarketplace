import React from "react";
import ProductCard from "../productcard/ProductCard";
import product from "../../images/product.jpg";
import "./HomeProducts.css";
import { fetchProductList } from "../../redux/HomeProducts/Action";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const HomeProducts = ({ prodList, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  useEffect(() => {
    selectRandomProducts();
  }, [prodList]);

  const selectRandomProducts = () => {
    if (prodList.data.length > 0) {
      const productsCopy = [...prodList.data];
      const selected = [];
      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * productsCopy.length);
        selected.push(productsCopy.splice(randomIndex, 1)[0]);
      }
      setSelectedProducts(selected);
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="row m-0 p-4 home-card-row d-flex flex-column">
        <h2 className="mb-4" style={{ color: "black" }}>
          New Arrival
        </h2>
        <div className="d-flex justify-content-around">
          {selectedProducts.map((product, index) => (
            <a
              key={index}
              href={`/products/1/${product.id}`}
              className="text-decoration-none"
            >
              <ProductCard
                id={product.productId}
                uid={product.user.userId}
                category={product.category.categoryId}
                img={`data:image/jpeg;base64,${product.firstImage}`}
                prodName={product.productName}
                prodDesc={product.productDescription}
                prodBrand={product.productBrand}
                price={product.price}
                ownerimg={`data:image/jpeg;base64,${product.user.userImage}`}
                owner={product.user.firstName + " " + product.user.lastName}
                rating={product.user.rating}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    prodList: state.prodList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProductList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeProducts);
