
// import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Redux-shop/action";
import "./product.css";
// useSelector

const Product = ({ products = [] }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Addtocart.cartarray );
  console.log("cart==>",cart)
  // const [cartarray,setcartarray]= useState()

  const handleAddToCart = (product) => {
    console.log("prodsdddsdduct", product);
    dispatch(addToCart([...cart, product]));
    console.log("carttttttt=>",cart)
    console.log(`Product added to cart with ID: ${product.id}`);
  };

  return (
    <div className="product-page">
      <h1>Products</h1>
      <div className="product-list">
        {products?.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.name} />
            <h2 className="title">{product.title}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
