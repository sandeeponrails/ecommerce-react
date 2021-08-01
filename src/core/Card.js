import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Card = ({product, showAddToCartButton = true}) => {
    const {cart, setCart} = useContext(CartContext);
    
    const addItem = (event, product) => {
        event.preventDefault();
        let _cart = {...cart};

        if(!_cart.items){
            _cart.items = {};
        }
        if(_cart.items[product._id]){
            _cart.items[product._id] += 1;
        }else{
            _cart.items[product._id] = 1;
        }

        if(!_cart.totalItems){
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;
        setCart(_cart);
        
    }
    const showAddToCartBtn = (showAddToCartButton, product) => {
        return (
          showAddToCartButton && (
            <button  onClick = {(e) => addItem(e, product)} className="btn btn-outline-warning mt-2 mb-2 card-btn-1  ">
              Add to cart
            </button>
          )
        );
      };
    return (
        <div className="card" key={product._id}>
          <div className="card-header card-header-1 ">{product.name}</div>
          <div className="card-body">
            <img src={product.image} alt="pizza" />
            <p className="card-p black-10">$ {product.price}</p>
            {showAddToCartBtn(showAddToCartButton, product)}
          </div>
        </div>
      );
}
export default Card;