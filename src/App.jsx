import React, { useState, useEffect } from 'react'
import ProductCard from "./ProductCard";
import './App.css'

export default function App() {
  const[products,setProducts] = useState([]);
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((response)=> response.json())
    .then((data)=>{
    setProducts(data.products);
    })
    .catch((error)=>{
      console.error("Error fetching products:", error);
    });
  },[]);
  
return (
  <div className="app">
    <h1>Product Listing:- 2500040234-Y.Bhuvanesh</h1>

    {products.length === 0 ? (
      <p>No products available</p>
    ) : (
     <div className="product-container">
  {products.map((item) => (
    <ProductCard key={item.id} product={item} />
  ))}
</div>

    )}
  </div>
)  
}
