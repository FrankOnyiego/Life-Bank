import React from 'react';
import './UserProfile.css';

export default function UserProfile (){
  return (
    <div className="user-profile-container">
      <h1 className="user-profile-heading">User Profile</h1>
      <div className="user-profile-info">
        <p><span className="profile-label">Name:</span> John Doe</p>
        <p><span className="profile-label">Email:</span> johndoe@example.com</p>
        <p><span className="profile-label">Blood Type:</span> O+</p>
        <p><span className="profile-label">Donation History:</span> 5 donations</p>
      </div>
    </div>
  );
};
