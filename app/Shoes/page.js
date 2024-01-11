"use client"
import React, { useState, useEffect } from "react";
import "./style.css";

const YourComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="row">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div className="row2">
          {data.products.map((product, index) => (
            <div key={index}>
              <h3>{product.name}</h3>
              <div className="row3">
                {product.images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt={`Product ${index + 1} Image ${imageIndex + 1}`}
                    style={{ width: "200px", height: "200px", marginRight: "30px" }}
                  />
                ))}
            </div>
              <h4>Title: {product.title}</h4>
              <h4>Brand: {product.brand}</h4>
              <h4>Category: {product.category}</h4>
              <h4>Price: ${product.price}</h4>
              <h4>DiscountPercentage: {product.discountPercentage}%</h4>
              <h4>Stock: {product.stock}</h4>
              <h4>Description: {product.description}</h4>
              <h4>Rating: {product.rating}</h4>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourComponent;
