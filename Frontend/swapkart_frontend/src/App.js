import './App.css';
import NavBar from './components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import CategoryBar from './components/category/CategoryBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='App-Header'>
      <header>
        <NavBar />
        <CategoryBar/>
      </header>
      <div className='sample-div'></div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
