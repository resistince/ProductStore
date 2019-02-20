import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ItemList from "./components/ItemList";
import InsertProduct from "./components/pages/InsertProduct";
import EditProduct from "./components/pages/EditProduct";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route
              exact
              path="/items"
              component={ItemList}
            />
            <Route
              exact
              path="/insert"
              component={InsertProduct}
            />
            <Route
              exact
              path="/edit"
              component={EditProduct}
            />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
