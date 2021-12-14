import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <p>© 2021 LFS. Fake rights reserved.</p>
      <div className="footer-links">
        <p>Contact us!</p>
        <a href="/" className="footer-link">
          <FaGithub className="icon" />
        </a>
        <a href="#" className="footer-link">
          <FaTwitter className="icon" />
        </a>
        <a href="#" className="footer-link">
          <FaInstagram className="icon" />
        </a>
        <a href="#" className="footer-link">
          <FaFacebook className="icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
