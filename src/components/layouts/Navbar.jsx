import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth } from '../../firebase'

const Navbar = ({ currentUser }) => {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark fixed-top">
            <Link to="/" className="navbar-brand">
            <i className="fas fa-crown"></i> &nbsp;SHOPPING CART
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/shop" className="nav-link">
                    SHOP
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    CONTACT
                  </Link>
                </li>
                <li className="nav-item">
                  { currentUser ? (
                    <Link className='nav-link' onClick={() => auth.signOut()}>SIGN OUT</Link>):( 
                    <Link className='nav-link' to='/sign-in'>SIGN IN</Link>)
                  }
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">
                    <i className="fas fa-shopping-cart">
                      <span className="badge badge-pill badge-danger">99</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </div>
        </nav>
      </div>
    );
  }

export default Navbar;
