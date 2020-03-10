import React, { Component } from "react";
import { Link } from 'react-router-dom'

export class Shoppings extends Component {
  render() {
    return (
      <div className="Shopping">
        <div className="row">
          {this.props.shoppings.map(shopping => (
            <div className="col-md-6">
              <div className="card mt-5" key={shopping.id} {...shopping}>
               <Link to={shopping.link}>
                <img
                  className="card-img-top"
                  src={shopping.url}
                  alt="shopping image"
                />
                </Link>
                <div className="card-body">
                  <h3 className="card-title">{shopping.title}</h3>
                  <p className="card-text">{shopping.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Shoppings;
