import React, { useEffect, useState, useContext } from "react";
import Layout from "./Layout";
import { CartContext } from "../CartContext";
const Cart = () =>{
    let total = 0;
    const [products, setProducts] = useState([]);
    const [fetched, setFetched] = useState(false);
    const { cart, setCart } = useContext(CartContext);

    
    useEffect(() =>{

        if(!cart.items) {
            return;
        }
        
        if(fetched){
            return;
        }
        fetch('/api/products/cart-items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ ids: Object.keys(cart.items)})
        }).then(res => res.json())
        .then(products => {
            setProducts(products);
            setFetched(true);
            //togglePriceFetched(true);
        })
    }, [cart, fetched])
    const getQty = (productId) => {
        return cart.items[productId];
    }
    const getSum = (productId, price) => {
        const sum = getQty(productId) * price;
        total += sum
        return sum;
    }
    const increment = (productId) => {
        const existingQty = cart.items[productId];
        const _cart = {...cart};
        _cart.items[productId] =  existingQty + 1;
        _cart.totalItems += 1;
        setCart(_cart);
    }
    const decrement = (productId) => {
        const existingQty = cart.items[productId];
        const _cart = {...cart};
        _cart.items[productId] =  existingQty - 1;
        _cart.totalItems -= 1;
        setCart(_cart);
    }
    return(
        
        <Layout title="Cart details" description="All products contains in the cart"  className="container-fluid">
            
                { !products.length ? <div className="col-md-12">Cart is empty</div> :
                 <div className="row">
                    <div className="col-md-2 mt-2"></div>
                <div className="col-md-8 mt-2">
                    <ul className="list-group">
                    {
                        products.map(product => {
                            return (
                                <li className="col-md-12 mt-2" key={product._id}>
                                <div className="justify-content-center row">
                                    <div className="d-flex flex-column col-md-3">
                                        <img className="img-fluid img-thumbnail" src={product.image} alt="" width="200px" height="200px"/>
                                        <span>{ product.name } (₹{product.price})</span>

                                    </div>
                                    <div className="col-md-3 align-self-center">
                                    <button  className="btn btn-sm btn-primary" onClick={()=> decrement(product._id)}>-</button>
                                    <b className="px-4">{getQty(product._id)}</b>
                                    <button  className="btn btn-sm btn-primary" onClick={()=> increment(product._id)}>+</button>
                                    </div>
                                    <div className="col-md-3 align-self-center">
                                        <span>₹ {getSum(product._id, product.price)} </span>
                                    </div>
                                    <div className="col-md-3 align-self-center">
                                    <button  className="btn btn-primary btn-sm">Delete</button>
                                    </div>
                                </div>
                            </li>
                            )
                        })
                    }
                </ul>
                    <hr/>
                    <div className="text-right">
                        <b>Grand Total:</b> ₹ { total }
                    </div>
                    <div className="text-right">
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            
                <div className="col-md-2 mt-2"></div>
               </div>
            
            }
            
        </Layout>
    )
}
export default Cart;