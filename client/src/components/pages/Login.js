import React, { Component } from 'react';
import axios from 'axios';

import LoginForm from '../forms/LoginForm';

import setAuthToken from '../../utils/setAuthToken';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const loginData = {
      email: e.target[0].value,
      password: e.target[1].value
    };

    axios.post("/api/user/login", loginData)
      .then(res => {
        const { token } = res.data;

        localStorage.setItem("jwtToken", token);
        //set token to auth header
        setAuthToken(token);
        
        this.props.history.push("/items");
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <LoginForm title={'Login'} onSubmit={this.onSubmit} />
      </div>
    )
  }
}
