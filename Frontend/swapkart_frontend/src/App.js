import React, { Fragment, useState } from 'react';
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
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Router, Routes } from 'react-router';

// const user = {
//   id: 1,
//   firstName: 'Pratik',
//   lastName: 'Patil',
//   email: 'Pratik7895@gamil.com',
//   mobileNumber: '9146353674',
//   city: 'Berlin',
//   profileImage: 'default-image-url.jpg',
// };

function App() {
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

        {/* Render Category component or Corousel and HomeProducts based on selected category and showDefault state */}
        {/* {selectedCategory && !showDefault ? (
          <Category category={selectedCategory} />
        ) : (
          <div>
            
            <Corousel />
            <HomeProducts />
          </div>
        )} */}

        {/* <Routes>
          <Route path="/account" element={<AccountSettings user={user} />} />
          <Route path="/update" element={<UpdatePage />} />
        </Routes> */}

        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/signin' Component={LogIn} />
          <Route path='/signup' Component={SignUpForm} />
          <Route path='/:cname/:cid' Component={Category} />
          <Route path="/products/:uid/:pid" Component={ProductDetailsPage}/>
	        <Route path='/WishList' Component={Wishlist}/>
        </Routes>
        
        <footer>
          <Footer />
        </footer>
      </div>
    </Provider>
  );
}

export default App;