import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from './components/shop/Shop'
import Contact from './components/contact/Contact'
import SignIn from './components/signin/SignIn'
import Navbar from './components/layouts/navbar/Navbar'
import Cart from './components/cart/Cart'
import Home from "./components/page/Home";
import Shoes from './components/collection/Shoes'
import Jacket from './components/collection/Jacket'
import Pants from './components/collection/Pants'
import Shirt from './components/collection/Shirt'

export class App extends Component {
  
render() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <div className="container">
            <Route exact path="/" component={Home} />
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
