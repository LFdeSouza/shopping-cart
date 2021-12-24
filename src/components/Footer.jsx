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
      </div>
    </footer>
  );
}

export default Footer;
