import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryBar.css';

const CategoryBar = ({ onCategoryChange }) => {
  const handleCategoryClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <div className='container-fluid bg-white shadow-sm rounded-bottom'>
      <div className='row d-flex justify-content-around'>
        <Link to="/fashion/1" onClick={() => handleCategoryClick('Fashion')} className='cat-link text-decoration-none'>Fashion</Link>
        <Link to="/electronics/2" onClick={() => handleCategoryClick('Electronics')} className='cat-link text-decoration-none'>Electronics</Link>
        <Link to="/sports/3" onClick={() => handleCategoryClick('Sports')} className='cat-link text-decoration-none'>Sports</Link>
        <Link to="/fitness/4" onClick={() => handleCategoryClick('Fitness')} className='cat-link text-decoration-none'>Fitness</Link>
        <Link to="/household/5" onClick={() => handleCategoryClick('Household')} className='cat-link text-decoration-none'>Household</Link>
        <Link to="/books/6" onClick={() => handleCategoryClick('Books')} className='cat-link text-decoration-none'>Books</Link>
      </div>
    </div>
  );
};

export default CategoryBar;