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
      styles: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      email: e.target.value,
      styles: {}
    });
  }

  handleSubmit() {
    if (this.state.email.trim() && this.emailRE.test(this.state.email)) {
      userStore.setCurrentUser(this.state.email);
      this.props.history.push('/groups');
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
            <Input id="group-name-input" style={this.state.styles} placeholder="Email" value={this.state.value} onChange={this.handleChange}/>
            <Button stylename="button--next" onClick={this.handleSubmit} />
          </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Login;
