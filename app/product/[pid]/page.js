"use client"
import React, { useState, useEffect } from 'react';
function Page({ params }) {
const [productDetails, setProductDetails] = useState(null);
const [cart, setCart] = useState([]);
const fetchProductDetails = () => {
    fetch(`https://dummyjson.com/products/${params.pid}`)
    .then((res) => res.json())
    .then((res) => {
        console.log('API Response:', res);
        setProductDetails(res);
    })
    .catch((error) => {
        console.error("Fetch error:", error);
    });
};
useEffect(() => {
    fetchProductDetails();
}, [params.pid]);
if (!productDetails) {
    return <div>Loading...</div>;
}
const addToCart = () => {
    setCart([...cart, productDetails]);
};
const buyNow = () => {
};
return (
    <div style={{ border: "solid 2px black" }}>
    <h1>Product Details-</h1>
    <img
        src={productDetails.image}
        style={{ width: '350px', height: '300px', borderRadius: '8px' }}
        alt={productDetails.title}
    />
    <p>Product ID: {productDetails.id}</p>
    <p>Title: {productDetails.title}</p>
    <button type="button" class="btn btn-warning"onClick={addToCart}>
        ADD TO CART
    </button>
    <button className="btn btn-success" onClick={buyNow}>
        BUY NOW
    </button>
    </div>
);
}
export default Page;
