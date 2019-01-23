import React, { Component } from "react";
import axios from "axios";

import Item from "./Item";

class ItemList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    axios.get('/api/product/all')
    .then((result) => {
      this.setState({
        items: result.data
      });
    })
  }

  render() {
    const { items } = this.state;

    return (
      <div className="container">
        {items.map(i => (
          <Item key={i._id} name={i.name} cost={i.price} />
        ))}
      </div>
    );
  }
}
export default ItemList;
