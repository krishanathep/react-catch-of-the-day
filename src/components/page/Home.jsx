import React, { Component } from "react"
import { Link } from 'react-router-dom'
import Header from '../layouts/Header'

export class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <div className="row">
          <Header />
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
                  <p class="card-text"><small class="text-muted">Updated {shopping.date}</small></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
