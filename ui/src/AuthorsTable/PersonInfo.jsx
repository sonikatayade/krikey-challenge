import React from 'react';
import './PersonInfo.css'; // Import CSS file for styling

const PersonInfo = ({ name, email }) => {
  return (
    <div className="person-info-container">
      <div className="image-container">
        {/* Circular image */}
        <img src="headshot.jpg" alt="Profile" className="profile-image" />
      </div>
      <div className="info">
        {/* Name */}
        <div className="name">{name}</div>
        {/* Email */}
        <div className="email">{email}</div>
      </div>
      {/* Close button */}
      <button className="close-button">X</button>
    </div>
  );
};

export default PersonInfo;
