import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { CartContext } from "../CartContext";

const isActive = (history, path) => {
    if(history.location.name === path){
        return { color: "#ff9900" };
    }else{
        return { color: "#ffffff" };
    }
}
const Menu = ({history}) => {
    const { cart }  =  useContext(CartContext);
    return(
        <div>
            <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/")}
                        to="/"
                    >
                        Home
                    </Link>
                    
                </li>
                <li>
                    <Link
                        className="nav-link"
                        style={isActive(history, "/about")}
                        to="/about"
                    >
                        About
                    </Link>
                </li>
                <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/cart")}
                    to="/cart"
                >
                    Cart{" "}
                    <sup>
                        <small className="cart-badge">{cart.totalItems ? cart.totalItems : 0}</small>
                    </sup>
                </Link>
            </li>
            </ul>
        </div>
    )
}
export default withRouter(Menu);