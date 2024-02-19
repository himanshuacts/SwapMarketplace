import React from "react";
import "./SearchResult.css";

const SearchResult = ({ result }) => {
  return (
    <div className="search-result d-flex flex-row align-items-center">
      <div
        className="result-details d-flex flex-row align-items-center w-100"
        style={{ flex: "2" }}
      >
        <span
          style={{ fontWeight: "600" }}
          className="text-capitalize text-dark"
        >
          {result.productName}
        </span>
      </div>
    </div>
  );
};

export default SearchResult;
