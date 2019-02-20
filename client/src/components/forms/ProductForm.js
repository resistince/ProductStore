import React, { Component } from "react";

export default class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      price: "",
      quantity: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    if (this.props.edit) {
      this.setState({
        name: this.props.name,
        description: this.props.description,
        price: this.props.price,
        quantity:  this.props.quantity
      });
    }
  }
  

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { id, title, onSubmit } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">{title}</h1>
            <form onSubmit={onSubmit} id={id}>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  onChange={this.onChange}
                  value={this.state.name}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="price"
                  placeholder="Price"
                  onChange={this.onChange}
                  value={this.state.price}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  onChange={this.onChange}
                  value={this.state.quantity}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="textarea"
                  name="description"
                  placeholder="Description"
                  onChange={this.onChange}
                  value={this.state.description}
                />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
