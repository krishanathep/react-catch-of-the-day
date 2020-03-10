import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from './components/shop/Shop'
import Contact from './components/contact/Contact'
import SignIn from './components/signin/SignIn'
import Navbar from './components/layouts/Navbar'
import Cart from './components/cart/Cart'
import Home from "./components/page/Home";
import Shoes from './components/collection/Shoes'
import Jacket from './components/collection/Jacket'
import Pants from './components/collection/Pants'
import Shirt from './components/collection/Shirt'

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
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <div className="container">
            <Route exact path="/" render={props => (
              <Home {...props} shoppings={this.state.shoppings}/>)}/>
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/shoes" component={Shoes} />
            <Route exact path="/jacket" component={Jacket} />
            <Route exact path="/pants" component={Pants} />
            <Route exact path="/shirt" component={Shirt} />
          </div>
        </Switch>
      </Router>
    </div>  
    );
  }
}
export default App;
