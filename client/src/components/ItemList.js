import React, { Component } from "react";

import Item from "./Item";

class ItemList extends Component {
  render() {
    const { items } = this.props;

    return (
      <div>
        {items.map(i => (
          <Item key={i.id} name={i.name} />
        ))}
      </div>
    );
  }
}
export default ItemList;
