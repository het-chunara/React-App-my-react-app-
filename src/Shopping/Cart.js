import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router";

const Cart = () => {
  const navigate=useNavigate()
  const cart = useSelector((state) => state.Addtocart.cartarray);
  // Calculate total price
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  const showAlert = () => {
    alert('Thank you for your purchase!');
    navigate("/")
  };


  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <div className="cart-list">
        {cart.map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.thumbnail} alt={product.name} />
            <div className="item-details">
              <h2 className="title">{product.title}</h2>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <button className="buy-now-button" onClick={showAlert}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
