import React, { useState } from 'react';
import NavBar from './components/navbar/NavBar';
import CategoryBar from './components/category/CategoryBar';
import Footer from './components/footer/Footer';
import Corousel from './components/corousel/Corousel';
import HomeProducts from './components/homeproductcompo/HomeProducts';
import Category from './components/category/Category';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
    <div className='App-Header'>
      <header className='m-3'>
        {/* Pass the handler to NavBar */}
        <NavBar onLogoClick={handleNavBarClick} />
        {/* Pass the handler to CategoryBar */}
        <CategoryBar onCategoryChange={handleCategoryChange} />
      </header>

      {/* Render Category component or Corousel and HomeProducts based on selected category and showDefault state */}
      {selectedCategory && !showDefault ? (
        <Category category={selectedCategory} />
      ) : (
        <div>
          {/* Render Corousel and HomeProducts by default */}
          <Corousel />
          <HomeProducts />
        </div>
      )}

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;