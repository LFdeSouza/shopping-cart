import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleCart } from "../store/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const toggleModal = () => dispatch(toggleCart());

  return (
    <header>
      <h1>THE FAKE STORE</h1>
      <nav>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/ProductPage" className="nav-link">
          Products
        </Link>
        <button className="btn" onClick={toggleModal}>
          <FaCartPlus className="icon" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
