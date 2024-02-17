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
        <Link to="/Fashion/1" onClick={() => handleCategoryClick('Fashion')} className='cat-link text-decoration-none'>Fashion</Link>
        <Link to="/Electronics/2" onClick={() => handleCategoryClick('Electronics')} className='cat-link text-decoration-none'>Electronics</Link>
        <Link to="/Sports/3" onClick={() => handleCategoryClick('Sports')} className='cat-link text-decoration-none'>Sports</Link>
        <Link to="/Fitness/4" onClick={() => handleCategoryClick('Fitness')} className='cat-link text-decoration-none'>Fitness</Link>
        <Link to="/Household/5" onClick={() => handleCategoryClick('Household')} className='cat-link text-decoration-none'>Household</Link>
        <Link to="/Books/6" onClick={() => handleCategoryClick('Books')} className='cat-link text-decoration-none'>Books</Link>
      </div>
    </div>
  );
};

export default CategoryBar;