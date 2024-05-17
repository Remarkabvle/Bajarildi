import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>We are a team of passionate individuals dedicated to providing the best products for our customers.</p>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@ourstore.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2024 Our Store. All rights reserved. 2024 Our Store. All rights reserved.</p> 
      </div>
    </footer>
  );
};

export default Footer;
