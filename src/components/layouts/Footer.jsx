import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-4 py-4">
        <div className="container" align="center">
          <span className="text-muted">&copy; 2020 <strong>Shopping Cart</strong> - Full Stack Solutions</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
