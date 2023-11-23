// Step1.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../Redux-for-form/action1";
import "./Step.css";

const Step1 = ({ onNext }) => {
  const data = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(setUserData(data));
      onNext();
    } else {
      alert("Please fill out all fields before proceeding.");
    }
  };

  const isFormValid = () => {
    return data.firstname !== "" && data.email !== "" && data.number !== "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUserData({ ...data, [name]: value }));
  };

  return (
    <div>
      <div className="step-text">
        <h2>Step 1: Personal Info</h2>
        <p>Please provide your name, email, and phone number</p>
      </div>
      <div className="page1-form">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Firstname"
              value={data.firstname}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={data.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              id="number"
              name="number"
              placeholder="Phone Number"
              value={data.number}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="submit">
            <button type="submit">Submit Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;
