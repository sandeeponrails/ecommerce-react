import React, { useEffect, useState } from 'react';
import Layout from "./Layout";
import Card from "./Card";
import {Link} from "react-router-dom";
const Products = () => {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        fetch("/api/products").
        then(response => response.json())
        .then(products=> {
            setProducts(products)
            setLoading(false)
        })
    }, [])

    const showItems = () => {
        return (
            <>
                {products.map((product, i) => (
                
                    <div className="col-md-3 mt-2">
                        <Card
                            key={product._id}
                            product={product}
                            showAddToCartBtn = {false}
                        />
                    </div>
                ))}
            </>
        );
    };
    const noItemsMessage = () => (
        <h2>
            Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
        </h2>
    );


    
    return (
        <Layout
            title="Shopping Cart"
            description="Available Products on the Store, Add remove checkout or continue shopping."
            className="container-fluid"
        >
            {/* <h2>Your cart has {`${products.length}`} items</h2> */}
            <hr />
            <div className="row">
                {loading ? "Loading...." : (products.length > 0 ? showItems() : noItemsMessage())}
            </div>
                {/* <div className="col-6">
                    <h2 className="mb-4">Your cart summary</h2>
                    <hr />
                    <Checkout products={items} setRun={setRun} run={run} />
                </div> */}
            
        </Layout>
    );
}
export default Products;
