import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <p>© 2021 LFS. Fake rights reserved.</p>
      <div className="footer-links">
        <p>Contact us!</p>
        <Link className="footer-link" to={"/"}>
          <FaGithub className="icon" />
        </Link>
        <Link className="footer-link" to={"/"}>
          <FaTwitter className="icon" />
        </Link>
        <Link className="footer-link" to={"/"}>
          <FaInstagram className="icon" />
        </Link>
        <Link className="footer-link" to={"/"}>
          {" "}
          <FaFacebook className="icon" />
        </Link>
        {/* <a href="/" className="footer-link">
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
        </a> */}
      </div>
    </footer>
  );
}

export default Footer;
