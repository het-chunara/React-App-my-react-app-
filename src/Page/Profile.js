import React from 'react';
import { useSelector } from 'react-redux';
// import actions from '../Redux/actions';
import './Profile.css';

const Profile = () => {
  const userData = useSelector((state) => state.userData);
//   console.log("userData=>",userData, userData.email)

  return (
    <div className="my-profile">
     <div className='main-p'>
      <h2>My Profile</h2>
      <div className="profile-container">
        <div className="profile-details">
          {/* <img src={userData.profilePhoto} alt="Profile" className="profile-photo" /> */}
          {/* <p className="username">Username: {userData.username}</p> */}
          <p className="email">Firstname: {userData.firstname}</p>
          <p className="email">Lastname: {userData.lastname}</p>
          <p className="email">Email: {userData.email}</p>
          <p className="email">Password: {userData.password}</p>
          {/* <img src={userData.profileImage} alt="Profile" /> */}
          {/* <p className="additional-info">Additional Information:</p> */}
          {/* <ul className="info-list">
            <li>Full Name: {userData.fullName}</li>
            <li>Location: {userData.location}</li> */}
            {/* Add more user details here */}
          {/* </ul> */}
        </div>
      </div> </div>
    </div>
  );
};

export default Profile;
