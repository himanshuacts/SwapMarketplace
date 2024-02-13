import NavBar from './components/navbar/NavBar';
import CategoryBar from './components/category/CategoryBar';
import Footer from './components/footer/Footer';
import Carousel from './components/carousel/Carousel';
import HomeProducts from './components/homeproductcompo/HomeProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='App-Header'>
      <header className='m-3'>
        <NavBar />
        <CategoryBar />
      </header>
        <Carousel />
        <HomeProducts />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;