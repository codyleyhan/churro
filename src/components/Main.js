import React, { Component } from 'react';
import { Link } from "react-router-dom";

import CallToActionButton from './CallToActionButton';
import Button from './Button';
import NewGroup from './NewGroup';

import '../styles/Main.scss';

const new_group_route = 'new'

class Main extends Component {
  transitionOut() {
    let elem = document.getElementById('landing');
    elem.style.left = "-10%";
    elem.style.opacity = 0;
    // setTimeout(()=>{window.location.href += new_group_route}, 500);
  }

  render() {
    return (
      <div className="Main">
        <div className="container">
          <div id="landing">
            <h2 className="welcome-header">Welcome to Churro!</h2>
            <h4 className="welcome-subheader">The New Way to Manage Chores</h4>
            <div className="button-container">
              <Link to="/new"><CallToActionButton onClick={this.transitionOut}>START A NEW GROUP</CallToActionButton></Link>
              <Link to="/tasks"><Button>LOGIN</Button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
