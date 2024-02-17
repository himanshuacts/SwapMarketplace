/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import man from "../../images/man.png";
import avatar from "../../images/avatar.png";
import logo from "../../images/logo.jpg";
import "./NavBar.css";

const NavBar = ({ onLogoClick }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const storedUserData = localStorage.getItem("User");
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [])

  return (
    <nav className="container-fluid header-nav bg-white shadow-sm border-bottom rounded-top">
      <div className="row d-flex justify-content-between align-items-center py-2 rounded-lg">
        <div className="col-3">
          <Link to={"/"} onClick={onLogoClick} className="text-decoration-none">
            <img src={logo} alt="swap-logo" className="logo-img mr-3" />
            <span className="nav-logo">Swap Marketplace</span>
          </Link>
        </div>
        <div className="col-5">
          <div className="input-group">
            <input
              type="text"
              className="form-control rounded-pill pl-3"
              placeholder="Search Products..."
            />
          </div>
        </div>
        <div className="col-2 d-flex justify-content-center">
          {userData ? <div className="dropdown">
            <button className="btn btn-white dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
              <img src={`data:image/jpeg;base64,${userData.image}`} alt="Base64 Image" className='login-img mr-2' />
              <span className='mr-2 profile'>{userData.firstName} {userData.lastName}</span>
            </button>
            <div className="dropdown-menu shadow-sm">
              <a className="dropdown-item" href="/account">Account Setting</a>
              <a className="dropdown-item" href="#">Your Products</a>
              <a className="dropdown-item" href="#">Wish List</a>
              <a className="dropdown-item" href="/" onClick={() => {
                localStorage.removeItem("User")
              }}>Log Out</a>
            </div>
          </div> : <Link to="/signin"><button type="submit" className="btn btn-primary mr-2">
            LogIn/SignUp
          </button></Link>}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
