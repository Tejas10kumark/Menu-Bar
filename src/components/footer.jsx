import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Sample Footer.</p>
    </footer>
  );
};

export default Footer;
