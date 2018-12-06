import React, { Component } from 'react';
import { observer } from "mobx-react"

import Button from './Button';
import Input from './Input';

import userStore from '../stores/users';

import '../styles/Main.scss';
import '../styles/NewGroup.scss';



const Login = observer(class Login extends Component {
  emailRE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      styles: {},
      validEmail: false,
    };

    this.onKeyPress = this.onKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
      styles: {}
    });
  }

  handleSubmit() {
    if (this.state.validEmail){
      let params = new URLSearchParams(this.props.location.search);
      const next = params.get('redirect') ? params.get('redirect') : '/groups';
      this.props.history.push(next);
    } else if (this.state.input.trim() && this.emailRE.test(this.state.input)) {
      userStore.setCurrentUser(this.state.input);
      this.setState({
        input: "",
        validEmail: true,
      })
    } else {
      this.setState({
        input: this.state.input,
        styles: {
          borderBottom: "3px solid #E00747"
        }
      })
    }
  }

  emailInput() {
    return (
      <span>
        <p>Hey there, what is your email?</p>
        <Input id="group-name-input" style={this.state.styles} placeholder="Email" value={this.state.input} onChange={this.handleChange} onKeyPress={this.onKeyPress} />
      </span>
    );
  }

  passwordInput() {
    return (
      <span>
        <p>And what's your password?</p>
        <Input id="group-name-input" type="password" placeholder="Password" value={this.state.input} onChange={this.handleChange} onKeyPress={this.onKeyPress} />
      </span>
    );
  }

  render() {
    let html = this.state.validEmail ? this.passwordInput() : this.emailInput();
    return (
      <div className="Main">
        <div className="container">
          <div className="NewGroup">
          <div className="form group-name">
            {html}
            <Button stylename="button--next" onClick={this.handleSubmit} />
          </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Login;
