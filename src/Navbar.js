import React from "react";
import "./Nav.css"
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector,useDispatch  } from 'react-redux';
import actions from "./Redux/actions";
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';


const Navbar = () => {
    const isUserLoggedIn = useSelector(state => state.isUserLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.userData);
    const handleSignOut = () => {
        // Dispatch the action to sign out and clear userData
        dispatch(actions.signOutUser());
        navigate("/"); 
      };

    return (
        <div>
            <div className='navbar'>
                <div className='logo'>
                    <Link to="/">  <img src="Dribble.png" alt="2"></img>
                    </Link>
                </div>
                <div className='list'>
                    <ul>
                        <li>01 Overview</li>
                        <li>02 Seats</li>
                        <li>03 Carts</li>
                        <li>04 Payments</li>
                        <li>05 Finish</li>
                    </ul>
                </div>

                {isUserLoggedIn ?
                    (<button onClick={handleSignOut}>Sign Out</button>)

                    : (

                        <div className="link-btn">
                            <li>
                                <Link to="/register">Register</Link>
                            </li>/
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </div>)}


                <div className='menu'><MenuIcon/></div>

                {isUserLoggedIn ? (

                <div className='profile'> <Link to="./profile"> 
                    <p>hi,{userData.firstname}</p>
                    <img src='./image-avatar.png' alt='a'></img> </Link>

                </div> )  : null }

            </div>
        </div>
    )
}

export default Navbar;