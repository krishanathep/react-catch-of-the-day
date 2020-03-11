import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Contact from "./components/contact/Contact";
import SignIn from "./components/signin/SignIn";
import Navbar from "./components/layouts/Navbar";
import Cart from "./components/cart/Cart";
import Home from "./components/page/Home";
import Shoes from "./components/collection/Shoes";
import Jacket from "./components/collection/Jacket";
import Pants from "./components/collection/Pants";
import Shirt from "./components/collection/Shirt";

export class App extends Component {
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
          link: "/shoes"
        },
        {
          id: 2,
          title: "JACKET",
          body:
            "Some quick example text to build on the card title and make up the bulk of the card s content",
          url:
            "https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          link: "/jacket"
        },
        {
          id: 3,
          title: "PANTS",
          body:
            "Some quick example text to build on the card title and make up the bulk of the card s content",
          url:
            "https://images.pexels.com/photos/2842118/pexels-photo-2842118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          link: "/pants"
        },
        {
          id: 4,
          title: "SHIRT",
          body:
            "Some quick example text to build on the card title and make up the bulk of the card s content",
          url:
            "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          link: "/shirt"
        }
      ],
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
          title: 'Yello Jacket',
          price: 3000,
          img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 2,
          title: 'Red Jacket',
          price: 2000,
          img: 'https://images.pexels.com/photos/747470/pexels-photo-747470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          id: 3,
          title: 'White Jacket',
          price: 4000,
          img: 'https://images.pexels.com/photos/634785/pexels-photo-634785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          id: 4,
          title: 'Jeans Jacket',
          price: 6000,
          img: 'https://images.pexels.com/photos/1766055/pexels-photo-1766055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
      ],
      pants: [
        {
          id: 1,
          title: 'Brown Pant',
          price: 3000,
          img: 'https://images.pexels.com/photos/1953450/pexels-photo-1953450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 2,
          title: 'Red Pant',
          price: 5000,
          img: 'https://images.pexels.com/photos/3253613/pexels-photo-3253613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          id: 3,
          title: 'Jeans Pant',
          price: 2000,
          img: 'https://images.pexels.com/photos/914472/pexels-photo-914472.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 4,
          title: 'Black Pant',
          price: 3500,
          img: 'https://images.pexels.com/photos/3429270/pexels-photo-3429270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
      ],
      shoes: [
        {
          id: 1,
          title: 'Yellow Shoes',
          price: 2000,
          img: 'https://images.pexels.com/photos/1335463/pexels-photo-1335463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          id: 2,
          title: 'Blue Shoes',
          price: 5000,
          img: 'https://images.pexels.com/photos/1102777/pexels-photo-1102777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          id: 3,
          title: 'White Shoes',
          price: 4000,
          img: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          id: 4,
          title: 'Black Shoes',
          price: 5500,
          img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <HashRouter basename="/">
          <Navbar />
          <Switch>
            <div className="container">
              <Route
                exact
                path="/"
                render={props => (
                  <Home {...props} shoppings={this.state.shoppings} />
                )}
              />
              <Route path="/shop" component={Shop} />
              <Route path="/contact" component={Contact} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/cart" component={Cart} />
              <Route 
                path="/shoes" 
                render={props => (
                  <Shoes {...props} shoes={this.state.shoes}/>
                )}/>
              <Route 
                path="/jacket" 
                render={props => (
                  <Jacket {...props} jackets={this.state.jackets}/>
                )}/>
              <Route 
                path="/pants" 
                render={props => (
                  <Pants {...props} pants={this.state.pants}/>
                )}/>
              <Route
                path="/shirt"
                render={props => (
                  <Shirt {...props} shirts={this.state.shirts} />
                )}
              />
            </div>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
export default App;
