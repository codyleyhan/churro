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
      email: '',
      validEmail: false,
      password: '',
      styles: {},
    };

    this.onKeyPress = this.onKeyPress.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleChangeEmail(e) {
    this.setState({
      email: e.target.value,
      styles: {}
    });
  }

  handleChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleSubmit() {
    console.log(this.state);
    if (this.state.email.trim() && this.emailRE.test(this.state.email)) {
      userStore.setCurrentUser(this.state.email);
      let params = new URLSearchParams(this.props.location.search);
      const next = params.get('redirect') ? params.get('redirect') : '/groups';
      this.props.history.push(next);
    } else {
      this.setState({
        email: this.state.email,
        styles: {
          borderBottom: "3px solid #E00747"
        }
      })
    }
  }

  render() {
    return (
      <div className="Main">
        <div className="container">
          <div className="NewGroup">
          <div className="form group-name">
            <p>Hey there, what is your email?</p>
            <Input id="group-name-input" style={this.state.styles} placeholder="Email" value={this.state.email} onChange={this.handleChangeEmail} onKeyPress={this.onKeyPress} />
            <p>And what's your password?</p>
            <Input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword} onKeyPress={this.onKeyPress} />
            <div>
              <Button stylename="button--next" onClick={this.handleSubmit} />
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Login;
