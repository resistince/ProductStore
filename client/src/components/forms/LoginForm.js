import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.onChange = this.onChange.bind(this);
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
                  name="email"
                  placeholder="Email"
                  onChange={this.onChange}
                  value={this.state.email}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.onChange}
                  value={this.state.password}
                />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}
