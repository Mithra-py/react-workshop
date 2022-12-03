import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Episodes from './pages/episodes/Episodes';
import About from './pages/about/About';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes className='Routes' >
        <Route path='/' element={<Home/>}/>
        <Route path='Episodes' element={<Episodes/>}/>
        <Route path='About' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
