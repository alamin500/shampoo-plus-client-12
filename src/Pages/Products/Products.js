import React from 'react'
import { useState } from "react";
import { useEffect } from "react";

import Product from "../Product/Product";
const Products = (props) => {
   const { home = false } = props;
 const [services, setServices] = useState([]);
 useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
 return (
  <div className="container ">
      <div className="row g-5">
        <h1 className="product-h1 pt-5" style={{ textAlign: "center" }}>
          OUR PACKAGES
        </h1>
        {services.map((product, i) =>
          home ? (
            i < 6 && <Product key={product.id} product={product}></Product>
          ) : (
            <Product key={product.id} product={product}></Product>
          )
        )}
      </div>
    </div>
 )
}

export default Products
