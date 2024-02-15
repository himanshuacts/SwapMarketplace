import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../images/avatar.png';
import logo from '../../images/logo.jpg';
import './NavBar.css';

const NavBar = ({ onLogoClick }) => {
  return (
    <nav className='container-fluid header-nav bg-white shadow-sm border-bottom rounded-top'>
      <div className='row d-flex justify-content-between align-items-center py-2 rounded-lg'>
        <div className='col-2'>
          <Link to={"/"} onClick={onLogoClick} className='text-decoration-none'>
            <img src={logo} alt='swap-logo' className='logo-img mr-3' />
            <span className='nav-logo'>Swap Marketplace</span>
          </Link>
        </div>
        <div className='col-5'>
          <div className="input-group">
            <input type="text" className="form-control rounded-pill pl-3" placeholder="Search Products..." />
          </div>
        </div>
        <div className='col-2 d-flex justify-content-center'>
          <div className="dropdown">
            <button className="btn btn-white dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
              <img src={avatar} alt='login-user' className='login-img mr-2' />
              <span className='mr-2 profile'>John Kadam</span>
            </button>
            <div className="dropdown-menu shadow-sm">
              <a className="dropdown-item" href="#">Account Setting</a>
              <a className="dropdown-item" href="#">Your Products</a>
              <a className="dropdown-item" href="#">Wish List</a>
              <a className="dropdown-item" href="#">Log Out</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;