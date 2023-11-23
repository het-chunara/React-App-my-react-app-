import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import actions from "../Redux/actions";
import { useNavigate } from 'react-router-dom';
import "./login.css";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userRegistrations = useSelector(state => state.userRegistrations);
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = userRegistrations?.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      dispatch(actions.loginUser({ email, password }));
      setLoginSuccess(true);
      setLoginError('');
      navigate("/"); 
    } else {
      setLoginError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login">
      <div id="login-form-wrap">
        <h2>Login</h2>
        {loginSuccess ? (
          <div className="alert-success">
            You have successfully logged in!
            <Link to="/">Go to Main Page</Link>
          </div>
        ) : (
          <form id="login-form" onSubmit={handleLogin}>
            <p>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="validation">
                <span></span>
                <span></span>
              </i>
            </p>
            <p>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="validation">
                <span></span>
                <span></span>
              </i>
            </p>
            <p>
              <input type="submit" id="login" value="Login" />
            </p>
          </form>
        )}
        {loginError && <div className="error-message">{loginError}</div>}
        <div className="create-account-wrap">
          <p>
            Not a member, Then <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
