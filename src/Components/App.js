import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM naming convection
    <Router>
       
      <div className="App">
      <Header/>
        <Switch>
          <Route path="/checkout">
            <Checkout/>
            </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
