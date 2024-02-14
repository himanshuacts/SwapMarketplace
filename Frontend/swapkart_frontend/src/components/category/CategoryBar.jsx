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
        <Link to="/fashion" onClick={() => handleCategoryClick('Fashion')} className='cat-link'>Fashion</Link>
        <Link to="/electronics" onClick={() => handleCategoryClick('Electronics')} className='cat-link'>Electronics</Link>
        <Link to="/sports" onClick={() => handleCategoryClick('Sports')} className='cat-link'>Sports</Link>
        <Link to="/fitness" onClick={() => handleCategoryClick('Fitness')} className='cat-link'>Fitness</Link>
        <Link to="/household" onClick={() => handleCategoryClick('Household')} className='cat-link'>Household</Link>
        <Link to="/books" onClick={() => handleCategoryClick('Books')} className='cat-link'>Books</Link>
      </div>
    </div>
  );
};

export default CategoryBar;