import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../Redux/actions';
import "./register.css"
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


const { registerUser } = actions;
// const {setImage} = actions;

const initialUserData = {
  // username: '',
  firstname:'',
  lastname:'',
  email: '',
  password: '',
  confirmPassword: '',
  profileImage: '', 
};



const Register = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(initialUserData);
  // const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData));
    setUserData(initialUserData);
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = (event) => {
  //     const base64Image = event.target.result;

  //     // Dispatch the setImage action to update Redux state
  //     dispatch(setImage(base64Image));
  //   };

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
 
  // const handlelink = () => { 
  //   navigate("/login"); 
  // }



  return (
    <div className="register">
      <div className="register-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          {/* <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={userData.username}
              onChange={handleChange}
              required
            />
          </div> */}
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

          {/* <div className="form-group">
            <input
              type="file" 
              accept="image/*" 
              onChange={handleChange}
            />
          </div> */}

          <div className="form-group">
            <button type="submit" >Register</button>
          </div>
        </form>
        <div className="login-link">
          <p>Already have an account? Go to the <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
