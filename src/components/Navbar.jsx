import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleCart } from "../store/actions";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const toggleModal = () => dispatch(toggleCart());

  const totalItems = items.reduce((prev, curr) => prev + curr.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="nav-title">
          THE FAKE STORE
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/ProductPage" className="nav-link">
                Products
              </Link>
            </li>
          </ul>
          <button className="cart-btn" onClick={toggleModal}>
            <FaCartPlus className="icon" />
          </button>
          <div
            className={`${
              items.length ? "cart-indicator" : "cart-indicator-hidden"
            }`}
          >
            {totalItems}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
