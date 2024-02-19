import React from "react";
import SearchResult from "./SearchResult";
import "./SearchResultsList.css";
import { Link } from "react-router-dom";
const SearchResultsList = ({ results }) => {
  if (!Array.isArray(results) || results.length === 0) {
    // If results is not an array or is empty, return null or display a message
    return <div>No results found</div>;
  }

  return (
    <div className="results-list">
      {results.map((result, id) => (
        <Link
          to={`/products/${result.user.userId}/${result.productId}`}
          className="text-decoration-none"
        >
          <SearchResult result={result} key={id} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResultsList;
