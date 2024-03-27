
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import CartItems from './components/CartItems ';
import { useState } from 'react';


function App() {
 const [clicked, setclicked] = useState(false);
  
  return (
    
    <div 
     className="App">
      <BrowserRouter> 
      <div style={{height:"80px"}}>
      <Navbar/>
      </div>
      
      
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu setclicked={setclicked} clicked={clicked}/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/Cart' element={<Cart setclicked={setclicked} clicked={clicked}/>} />
        <Route path='/CartItems' element={<CartItems/>} />
      </Routes>
      
     
      <Footer/>
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
