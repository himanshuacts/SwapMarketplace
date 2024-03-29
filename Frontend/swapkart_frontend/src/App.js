import React, { Fragment, useEffect, useState } from 'react';
import { Route, Router, Routes } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavBar from './components/navbar/NavBar';
import CategoryBar from './components/category/CategoryBar';
import Footer from './components/footer/Footer';
import Corousel from './components/corousel/Corousel';
import HomeProducts from './components/homeproductcompo/HomeProducts';
import Category from './components/category/Category';
import SignUpForm from './components/LoginAndSignUp/SignUpForm';
import LogIn from './components/LoginAndSignUp/LogIn';
import HomePage from './components/homepage/HomePage';
import AccountSettings from './components/accountsettings/AccountSettings';
import UpdatePage from './components/updatepage/UpdatePage';
import ProductDetailsPage from './components/Product/ProductDetails';
import Wishlist from './components/wishlist/Wishlist';
import MyProduct from './components/myProduct/MyProduct';
import AddProductForm from './components/addproductform/AddProductForm';
import Transactions from './components/transactions/Transactions';
import { fetchProductList } from './redux/HomeProducts/Action';
import SwapWindow from './components/swapwindow/SwapWindow'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js';
import './App.css';

function App() {
  // Fetch the product list from database into redux store
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchProductList();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);
  // State to track whether to show default components or not
  const [showDefault, setShowDefault] = useState(true);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Hide default components when a category is selected
    setShowDefault(false);
  };

  const handleNavBarClick = () => {
    setSelectedCategory(null);
    // Show default components when NavBar logo is clicked
    setShowDefault(true);
  };

  return (
    <Provider store={store}>
      <div className='App-Header'>
        <header className='m-3'>
          {/* Pass the handler to NavBar */}
          <NavBar onLogoClick={handleNavBarClick} />
          {/* Pass the handler to CategoryBar */}
          <CategoryBar onCategoryChange={handleCategoryChange} />
        </header>

        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/signin' Component={LogIn} />
          <Route path='/signup' Component={SignUpForm} />
          <Route path='/:cname/:cid' Component={Category} />
          <Route path='/products/:uid/:pid' Component={ProductDetailsPage} />
          <Route path='/MyProducts' Component={MyProduct} />
          <Route path='/Transactions' Component={Transactions} />
          <Route path='/AddProduct' Component={AddProductForm} />
          <Route path='/WishList' Component={Wishlist} />
          <Route path="/account" element={<AccountSettings />} />
          <Route path="/update" element={<UpdatePage />} />
          <Route path='/contact-owner/:pid/:uid' Component={SwapWindow} />
        </Routes>

        <footer>
          <Footer />
        </footer>
      </div>
    </Provider>
  );
}

export default App;