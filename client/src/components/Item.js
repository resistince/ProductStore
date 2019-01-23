import React, { Component } from "react";
import propTypes from "prop-types";

import "./item.css";

class Item extends Component {
  render() {
    const { name, cost } = this.props;
    return (
      <>
        <span>{name}</span> <span>{cost} </span>
      </>
    );
  }
}

Item.propTypes = {
  name: propTypes.string.isRequired,
  cost: propTypes.string.isRequired
};

export default Item;
