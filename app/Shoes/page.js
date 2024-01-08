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
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Stock: {product.stock}</p>
              <p>Description: {product.description}</p>
              <p>Images:</p>
              <div className="row3">
                {product.images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt={`Product ${index + 1} Image ${imageIndex + 1}`}
                    style={{ width: "100px", height: "100px", marginRight: "5px" }}
                  />
                ))}
              </div>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourComponent;
