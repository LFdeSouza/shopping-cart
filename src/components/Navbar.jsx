import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleCart } from "../store/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const toggleModal = () => dispatch(toggleCart());

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
        </div>
      </div>
    </nav>
  );

  // return (
  //   <header>
  //     <h1>THE FAKE STORE</h1>
  //     <nav>
  //       <Link to="/" className="nav-link">
  //         Home
  //       </Link>
  //       <Link to="/ProductPage" className="nav-link">
  //         Products
  //       </Link>
  //       <button className="btn" onClick={toggleModal}>
  //         <FaCartPlus className="icon" />
  //       </button>
  //     </nav>
  //   </header>
  // );
};

export default Navbar;
