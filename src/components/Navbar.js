import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Navbar = ({ openCart }) => {
  return (
    <header>
      <h1>THE FAKE STORE</h1>
      <nav>
        <a className="nav-link" href="#">
          Home
        </a>
        <a className="nav-link" href="#">
          Products
        </a>
        <button className="btn" onClick={openCart}>
          <FaCartPlus className="icon" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
