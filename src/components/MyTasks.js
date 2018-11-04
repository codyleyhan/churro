import React, { Component } from 'react';

import logo from '../logo.svg';
import '../styles/Main.scss';

class MyTasks extends Component {
  render() {
    return (
      <div className="MyTasks">
        <header className="MyTasks-header">
          <img src={logo} className="MyTasks-logo" alt="logo" />
          <p>
            Edit <code>src/MyTasks.js</code> and save to reload.
          </p>
          <a
            className="MyTasks-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default MyTasks;
