import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ItemList from "./components/ItemList";

const items = [
  { id: 1, name: "Test 1", cost: 20 },
  { id: 2, name: "Test 2", cost: 40 },
  { id: 3, name: "Test 3", cost: 60 }
];

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
              render={() => <ItemList items={items} />}
            />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
