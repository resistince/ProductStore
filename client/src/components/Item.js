import React, { Component } from "react";

class Item extends Component {
  render() {
    const { name } = this.props;
    return <span>{name}</span>;
  }
}
export default Item;
