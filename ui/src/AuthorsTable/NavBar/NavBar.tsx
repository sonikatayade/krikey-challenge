import React from "react";
import './NavBar.css'

export function NavBar() {
  return (
    <div>
      <div >
        <ul style={{listStyle:'none', display:'flex',justifyContent:'space-between', maxWidth:'50%'}}>
          <li>
            <p>How to Animate</p>
          </li>
          <li>
            <p>Business</p>
          </li>
          <li>
            <p>Education</p>
          </li>
          <li>
            <p>Social Media</p>
          </li>
          <li>
            <p>Pricing</p>
          </li>
          <li>
            <p>About Us</p>
          </li>
          <button className="button" >Get Started</button>
        </ul>
      </div>
    </div>
  );
}
