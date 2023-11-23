import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Snavbar from "./Snavbar";
import Product from "./Product";
import Cart from "./Cart";
import Registerss from "./Registerss";
import Logins from "./Logins";
import About from "./About";
import Contact from "./Contact";
import Main from "./Mains";
import Footer from "./Footer1";
import SellerForm from "./SellerForm";
import { useSelector } from "react-redux";

const App3 = () => {
  const [products, setProducts] = useState([]);
  const [cartt, setCart] = useState([]);
  const userData = useSelector((state) => state.user.userData);
  const publicRoute = userData && Object.keys(userData).length !== 0;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data?.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cartt, product]);
    console.log("cart===>", cartt);
    console.log(`Product added to cart with ID: ${product.id}`);
  };

  return (
    <div>
      <Snavbar setIsLoggedIn={userData} />
      <Routes>
        <Route path="/" element={<Main />} />

        {!publicRoute ? (
          <>
            <Route path="/register" element={<Registerss />} />
            <Route path="/login" element={<Logins setIsLoggedIn={userData} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route
              path="/product"
              element={<Product products={products} addToCart={handleAddToCart} />}
            />
            <Route path="/cart" element={<Cart cart={cartt} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/form" element={<SellerForm />} />
            <Route path="*" element={<Navigate to="/product" />} />
          </>
        )}
      </Routes>
      <Footer />
    </div>
  );
};

export default App3;
