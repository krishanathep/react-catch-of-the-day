import React, { Component } from "react";
import Shirt from "../collection/Shirt";
import Jacket from "../collection/Jacket";
import Pants from '../collection/Pants'
import Shoes from '../collection/Shoes'

export class Shop extends Component {
  constructor() {
    super();

    this.state = {
      shirts: [
        {
          id: 1,
          title: "Blue Shirt",
          price: 500,
          img:
            "https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          id: 2,
          title: "Yellow Shirt",
          price: 400,
          img:
            "https://images.pexels.com/photos/1906007/pexels-photo-1906007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          id: 3,
          title: "White Shirt",
          price: 800,
          img:
            "https://images.pexels.com/photos/2535859/pexels-photo-2535859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          id: 4,
          title: "Red Shirt",
          price: 900,
          img:
            "https://images.pexels.com/photos/1891724/pexels-photo-1891724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
      ],
      jackets: [
        {
          id: 1,
          title: "Yello Jacket",
          price: 3000,
          img:
            "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          id: 2,
          title: "Red Jacket",
          price: 2000,
          img:
            "https://images.pexels.com/photos/747470/pexels-photo-747470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          id: 3,
          title: "White Jacket",
          price: 4000,
          img:
            "https://images.pexels.com/photos/634785/pexels-photo-634785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          id: 4,
          title: "Jeans Jacket",
          price: 6000,
          img:
            "https://images.pexels.com/photos/1766055/pexels-photo-1766055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
      ],
      pants: [
        {
          id: 1,
          title: "Brown Pant",
          price: 3000,
          img:
            "https://images.pexels.com/photos/1953450/pexels-photo-1953450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          id: 2,
          title: "Red Pant",
          price: 5000,
          img:
            "https://images.pexels.com/photos/3253613/pexels-photo-3253613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          id: 3,
          title: "Jeans Pant",
          price: 2000,
          img:
            "https://images.pexels.com/photos/914472/pexels-photo-914472.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          id: 4,
          title: "Black Pant",
          price: 3500,
          img:
            "https://images.pexels.com/photos/3429270/pexels-photo-3429270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
      ],
      shoes: [
        {
          id: 1,
          title: "Yellow Shoes",
          price: 2000,
          img:
            "https://images.pexels.com/photos/1335463/pexels-photo-1335463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          id: 2,
          title: "Blue Shoes",
          price: 5000,
          img:
            "https://images.pexels.com/photos/1102777/pexels-photo-1102777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          id: 3,
          title: "White Shoes",
          price: 4000,
          img:
            "https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          id: 4,
          title: "Black Shoes",
          price: 5500,
          img:
            "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1 align="center" className="text-uppercase mt-3">
          Collections
        </h1>
        <Shirt shirts={this.state.shirts} />
        <Jacket jackets={this.state.jackets} />
        <Pants pants={this.state.pants} />
        <Shoes shoes={this.state.shoes} />
      </div>
    );
  }
}

export default Shop;
