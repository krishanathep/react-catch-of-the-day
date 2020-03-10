import React, { Component } from "react";
import Shoppings from "./Shoppings";

export class Home extends Component {
  constructor() {
    super();

    this.state = {
      shoppings: [
        {
          id: 1,
          title: "SHOES",
          body:
            "Some quick example text to build on the card title and make up the bulk of the card s content",
          url:
            "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          link: '/shoes'
        },
        {
          id: 2,
          title: "JACKET",
          body:
            "Some quick example text to build on the card title and make up the bulk of the card s content",
          url:
            "https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          link: '/jacket'
        },
        {
          id: 3,
          title: "PANTS",
          body:
            "Some quick example text to build on the card title and make up the bulk of the card s content",
          url:
            "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          link: '/pants'
        },
        {
          id: 4,
          title: "SHIRT",
          body:
            "Some quick example text to build on the card title and make up the bulk of the card s content",
          url:
            "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          link: '/shirt'
        }
      ]
    };
  }

  render() {
    return (
      <div className="Home">
        <Shoppings shoppings={this.state.shoppings} />
      </div>
    );
  }
}

export default Home;
