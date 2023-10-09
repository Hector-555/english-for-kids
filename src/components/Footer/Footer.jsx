import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <p>
        <a
          href="https://github.com/Hector-555"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          My Github page
        </a>
      </p>
      <p className="footer-year">2023</p>
    </div>
  );
}

export default Footer;
