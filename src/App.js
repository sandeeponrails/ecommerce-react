import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import { useContext } from 'react';
function App() {
  const [cart, setCart] = useState({});

  useEffect(()=>{
    const cart = localStorage.getItem('cart');
    setCart(cart)

  }, [])

  useEffect(()=>{
    console.log(cart);
    // setCart({price})
    localStorage.setItem('cart', JSON.stringify(cart));


  }, [cart])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
