import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loginUser } from './Redux-shop/action';
import { Link, useNavigate } from 'react-router-dom';
// useNavigate
import "./logins.css";


const Logins = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
const [loginError, setLoginError] = useState('');

  const userRegistrations = useSelector((state) => state.user.userRegistrations);
  // const logindata = useSelector((state) => state.user.userData);

  // console.log("regdata=>",regdata)
//  console.log("logindata=>",logindata)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = userRegistrations?.find(
      (user) => user.email === email && user.password === password
    );

    const userData = {
      email,
      password,
    };

    if(user){
    dispatch(loginUser(userData));
    setEmail('');
    setPassword('');
    setLoginError('');
    navigate("/"); 
    }else {
      setLoginError('*Invalid email or password. Please try again.');
  };
  };
  return (
    <div className="login">
      <div id="login-form-wrap">
        <h2>Login</h2>
        {/* {loginError && <p style={{ color: 'red' }}>{loginError}</p>} */}

        <form id="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input type="submit" id="login" value="Login" />
          </div>
        </form>
        {loginError && <div className="error-message">{loginError}</div>}
        <div className="create-account-wrap">
          <p>
            Don't have an account? <Link to="/register">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logins;
