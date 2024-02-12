/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './CategoryBar.css'

const CategoryBar = () => {
  return (
    <div className='container-fluid bg-white shadow-sm'>
    <div className='row d-flex justify-content-around'>
        <a href='#' className='text-decoration-none px-3 cat-link'>Fashion</a>
        <a href='#' className='text-decoration-none px-3 cat-link'>Electronics</a>
        <a href='#' className='text-decoration-none px-3 cat-link'>Sports</a>
        <a href='#' className='text-decoration-none px-3 cat-link'>Fitness</a>
        <a href='#' className='text-decoration-none px-3 cat-link'>Household</a>
        <a href='#' className='text-decoration-none px-3 cat-link'>Books</a>
    </div>
    </div>
  )
}

export default CategoryBar
