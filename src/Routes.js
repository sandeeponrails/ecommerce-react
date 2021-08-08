import React, { useState, useEffect } from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home  from './core/Home';
import Products from "./core/Products";
import Cart from "./core/Cart";
import { CartContext } from './CartContext';
import About from './core/About';
const Routes = () => {
    const [cart, setCart] = useState({});

    useEffect(()=>{
        const cart = localStorage.getItem('cart');
        console.log("details", cart);
        setCart(JSON.parse(cart))
    
      }, [])
    
      useEffect(()=>{
        // setCart({price})
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(cart);

      }, [cart])

    return(
       
    <BrowserRouter>
     <CartContext.Provider value={{ cart, setCart }}>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component = {Products} />
            <Route path="/cart" component = {Cart} />
            <Route path="/about" component = {About} />
        </Switch>
        </CartContext.Provider>
    </BrowserRouter>
    )
}
export default Routes;