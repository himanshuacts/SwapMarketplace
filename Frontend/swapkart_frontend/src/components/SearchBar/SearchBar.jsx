import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { fetchProductList } from "../../redux/HomeProducts/Action";
import { connect } from "react-redux";
import "./SearchBar.css";
import SearchResultsList from "./SearchResultsList"; // Import SearchResultsList component

export const SearchBar = ({ prodList, fetchProducts }) => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleChange = (value) => {
    setInput(value);
    // Filter products based on input
    const filteredProducts = prodList.data.filter((product) =>
      product.productName.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filteredProducts);
  };

  return (
    <div className="search-body">
      <div
        className="input-wrapper d-flex align-items-center rounded-pill"
        style={{ width: "550px" }}
      >
        <FaSearch id="search-icon" className="mr-3" />
        <input
          placeholder="Search Products..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      {input && <SearchResultsList results={results} />}
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
