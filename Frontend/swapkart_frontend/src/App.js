import './App.css';
import NavBar from './components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import CategoryBar from './components/category/CategoryBar';
import Footer from './components/footer/Footer';
import Corousel from './components/corousel/Corousel';
import HomeProducts from './components/homeproductcompo/HomeProducts';
import SignUpForm from './components/LoginAndSignUp/SignUpForm';
import LogIn from './components/LoginAndSignUp/LogIn';
function App() {
  return (
    <div className='App-Header'>
      <header className='m-3'>
        <NavBar />
        <CategoryBar />
      </header>
      <Corousel />
      <HomeProducts />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
