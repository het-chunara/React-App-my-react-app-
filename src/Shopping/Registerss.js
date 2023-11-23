import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "./Redux-shop/action";
import { Link, useNavigate } from "react-router-dom";
import "./registercss.css";

const Registerss = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState('');
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "buyer",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData));
    setUserData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: "buyer", 
    });
    navigate('/login');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    
    if (name === 'password' || name === 'confirmPassword') {
      setPasswordError(
        name === 'confirmPassword' && value !== userData.password
          ? 'Passwords do not match'
          : ''
      );
    }
  };

  return (
    <div className="register">
      <div className="register-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Firstname"
              value={userData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Lastname"
              value={userData.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={userData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}

          <div className="form-group">
            <select
              id="userType"
              name="userType"
              value={userData.userType}
              onChange={handleChange}
            >
              
                <option value="seller">Seller</option>
             
                <option value="buyer">Buyer</option>
              
            </select>
          </div>

          <div className="form-group">
            <button type="submit">Register</button>
          </div>
        </form>
        <div className="login-link">
          <p>
            Already have an account? Go to the <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registerss;
