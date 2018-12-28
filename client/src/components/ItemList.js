import React, { Component } from "react";

import Item from "./Item";

class ItemList extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="container">
        {items.map(i => (
          <Item key={i.id} name={i.name} cost={i.cost} />
        ))}
      </div>
    );
  }
}
export default ItemList;
