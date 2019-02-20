import React, { Component } from "react";
import axios from "axios";

import Item from "./Item";

class ItemList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      items: []
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillMount() {
    axios.get('/api/product/all')
    .then((result) => {
      this.setState({
        items: result.data
      });
    })
  }

  handleDelete(id) {
    axios
      .delete(`/api/product/${id}`)
      .then((res) => {
        axios
          .get('/api/product/all')
          .then((itemList) => {
            this.setState({ items: itemList.data })
          })
      })
  }

  handleEdit(item) {
    this.props.history.push({
      pathname: '/edit',
      state: {
        edit: true,
        id: item.id,
        name: item.name,
        description: item.description,
        cost: item.cost,
        quantity: item.quantity
      }
    });
  }
  

  render() {
    const { items } = this.state;

    return (
      <div className="container">
        <div className="card-deck">
          {items.map(i => (
            <Item 
              key={i._id} 
              id={i._id}
              name={i.name} 
              description={i.description} 
              cost={i.price} 
              quantity={i.quantity}  
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default ItemList;
