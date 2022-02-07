import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted">
            &copy; 2021 LFS, rights reserved
          </p>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                <Link className="footer-link" to={"/"}>
                  <FaGithub className="icon" />
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                <Link className="footer-link" to={"/"}>
                  <FaTwitter className="icon" />
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                {" "}
                <Link className="footer-link" to={"/"}>
                  <FaInstagram className="icon" />
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                {" "}
                <Link className="footer-link" to={"/"}>
                  {" "}
                  <FaFacebook className="icon" />
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );

  // return (
  //   <footer>
  //     <p>© 2021 LFS. Fake rights reserved.</p>
  //     <div className="footer-links">
  //       <p>Contact us!</p>
  //       <Link className="footer-link" to={"/"}>
  //         <FaGithub className="icon" />
  //       </Link>
  //       <Link className="footer-link" to={"/"}>
  //         <FaTwitter className="icon" />
  //       </Link>
  //       <Link className="footer-link" to={"/"}>
  //         <FaInstagram className="icon" />
  //       </Link>
  //       <Link className="footer-link" to={"/"}>
  //         {" "}
  //         <FaFacebook className="icon" />
  //       </Link>
  //     </div>
  //   </footer>
  // );
}

export default Footer;
