import React, { Component } from "react";
import propTypes from "prop-types";

import IconClose from "./icons/IconClose";
import IconEdit from "./icons/IconEdit";

class Item extends Component {
  constructor(props) {
    super(props);

    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  deleteItem() {
    this.props.handleDelete(this.props.id);
  }

  editItem() {
    this.props.handleEdit(this.props);
  }

  render() {
    const { name, description, cost, quantity } = this.props;

    return (
      <>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-header">
              {name}
              <span
                className="float-right"
                onClick={this.deleteItem}
                title="Delete"
              >
                <IconClose />
              </span>
              <span
                className="float-right mr-1"
                onClick={this.editItem}
                title="Edit"
              >
                <IconEdit />
              </span>
            </div>
            <div className="card-body">{description}</div>
            <div className="card-footer">
              <p>${cost}</p>
              <p>Quantity: {quantity}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Item.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  cost: propTypes.string.isRequired,
  quantity: propTypes.number.isRequired,
  handleDelete: propTypes.func.isRequired,
  handleEdit: propTypes.func.isRequired
};

export default Item;
