import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
    <div className="col-md-12">
      <div className="Header">
        <div id="demo" class="carousel slide" data-ride="carousel">
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://images.pexels.com/photos/264726/pexels-photo-264726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Los Angeles" width="1100px" height="500px"/>
              <div className="carousel-caption">
                <h3>Shopping Cart</h3>
                <p>We had such a great time in Shopping Cart!</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Chicago" width="1100px" height="500px" />
              <div className="carousel-caption">
                <h3>Shopping Cart</h3>
                <p>We had such a great time in Shopping Cart!</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="New York" width="1100px" height="500px" />
              <div className="carousel-caption">
                <h3>Shopping Cart</h3>
                <p>We had such a great time in Shopping Cart!</p>
              </div>
            </div>
          </div>

          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </div>  
    );
  }
}

export default Header;
