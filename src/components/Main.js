import React, { Component } from 'react';

import logo from '../logo.svg';
import '../styles/Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="container">
          <h2 className="welcome-header">Welcome to Churro!</h2>
          <h4 className="welcome-subheader">The New Way to Manage Chores</h4>
          <div className="button-container">
            <button className="button button--new-group">START A NEW GROUP</button>
            <button className="button button--login">LOGIN</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
