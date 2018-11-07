import React, { Component } from 'react';
import { Link } from "react-router-dom";

import CallToActionButton from './CallToActionButton';
import Button from './Button';

import '../styles/Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="container">
          <h2 className="welcome-header">Welcome to Churro!</h2>
          <h4 className="welcome-subheader">The New Way to Manage Chores</h4>
          <div className="button-container">
            <CallToActionButton >START A NEW GROUP</CallToActionButton>
            <Link to="/tasks"><Button>LOGIN</Button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
