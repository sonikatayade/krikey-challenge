import React from "react";
import './Author.css';
import { src } from "../img";

export function Author({
  name,
  email,
  revenue,
}: {
  name: string;
  email: string;
  revenue: number;
}) {
  return (
    <div className="person-info-container">
      <div className="image-container">
        <img src={src} className="profile-image" />
      </div>
      <div className="info">
        {/* Name */}
        <div className="name">{name}</div>
        {/* Email */}
        <div className="email">{email}</div>
      </div>
      <button className="close-button">X</button>
    </div>
  );
}
