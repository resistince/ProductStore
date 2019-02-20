import React, { Component } from "react";
import axios from "axios";

import ProductForm from "../forms/ProductForm";

export default class InsertProduct extends Component {
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

    axios.post("/api/product/", newProductData).then(res => {
      console.log(res.data);
      this.props.history.push("/items");
    });
  }

  render() {
    return (
      <div>
        <ProductForm title="Insert Product" onSubmit={this.onSubmit} />
      </div>
    );
  }
}
