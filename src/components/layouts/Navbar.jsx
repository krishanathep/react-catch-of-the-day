import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <i class="fas fa-frog"></i> &nbsp;SHOPPING
            </Link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
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
                  <Link to="/sign-in" className="nav-link">
                    SIGNIN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">
                    <i className="fas fa-shopping-cart">
                      <span class="badge badge-pill badge-danger">0</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
