import React, { useState } from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home  from './core/Home';
import Cart from "./core/Cart";
import { CartContext } from './CartContext';
import About from './core/About';
const Routes = () => {
    const [cart, setCart] = useState({});
    return(
       
    <BrowserRouter>
     <CartContext.Provider value={{ cart, setCart }}>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" component = {Cart} />
            <Route path="/about" component = {About} />
        </Switch>
        </CartContext.Provider>
    </BrowserRouter>
    )
}
export default Routes;