import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "./Redux-shop/action";

const Snavbar = () => {
  const userData = useSelector((state) => state.user.userData);

  // const userData = useSelector(state => state.user.userData);
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("userData=>", userData);

  const handleSignOut = () => {
    dispatch(signOut());
    // setIsLoggedIn(false);
    navigate("/")
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="png2.png" alt="2" />
          </Link>
          <div className="name">
            <img src="shop1.gif" alt="l" />
          </div>
        </div>

        <div className="main">
          <ul className="nav-list">
            {/* Home link */}
            <li className="nav-item">{/* Your Home link */}</li>
            <li className="nav-item">
              <Link to="/product" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            {/* <li>hii,{userRegistrations.firstname}</li> */}
          </ul>
        </div>
        <div className="link-btn">
          {!isUserLoggedIn || !userData ? (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          ) : (
            <>
            
              <li className="email">login by--{userData.userType}</li>
              {userData.userType === 'seller' && (
                <Link to="/form">
                  <li className="form">Form</li>
                </Link>
              )}
              <li className="firstname">hii,{userData.firstname}</li>
              <div className="sign-out">
                <li onClick={handleSignOut}>Sign Out </li>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Snavbar;
