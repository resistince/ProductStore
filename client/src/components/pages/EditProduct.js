import React, { Component } from "react";
import axios from "axios";

import ProductForm from "../forms/ProductForm";
export default class EditProduct extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const newProductData = {
      name: e.target[0].value,
      description: e.target[3].value,
      price: e.target[1].value,
      quantity: e.target[2].value
    };

    axios.put(`/api/product/${this.props.location.state.id}`, newProductData).then(res => {
      console.log(res.data);
      this.props.history.push("/items");
    });
  }

  render() {
    const {id, name, cost, description, quantity, edit} = this.props.location.state;
    return (
      <div>
        <ProductForm 
          title="Edit Product"
          id={id} 
          edit={edit}
          name={name}
          price={cost}
          description={description}
          quantity={quantity}
          onSubmit={this.onSubmit} 
        />
      </div>
    );
  }
}
