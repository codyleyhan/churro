import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

import CallToActionButton from "./CallToActionButton";
import Button from "./Button";
import NavBar from "./NavBar";
import HelpTool from "./HelpTool";

import userStore from "../stores/users";
import churro from "../img/churro.svg";

import "../styles/Main.scss";

const Main = observer(
  class Main extends Component {
    transitionOut() {
      let elem = document.getElementById("landing");
      elem.style.left = "-10%";
      elem.style.opacity = 0;
    }

    render() {
      return (
        <div className="Main">
          <div className="container">
            <div id="landing">
              <img className="landing-img" src={churro} />
              <h2 className="welcome-header">Welcome to Churro!</h2>
              <h4 className="welcome-subheader">
                The New Way to Manage Chores
              </h4>
              <div className="button-container">
                <Link to="/new">
                  <CallToActionButton onClick={this.transitionOut}>
                    START A NEW GROUP
                  </CallToActionButton>
                </Link>
                <Link to={userStore.isLoggedIn ? "/groups" : "/login"}>
                  <Button>
                    {userStore.isLoggedIn ? "YOUR GROUPS" : "LOGIN"}
                  </Button>
                </Link>
                {
                  userStore.isLoggedIn ? <Button onClick={() => userStore.logout()}>LOGOUT</Button>: "" 
                }
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
);

export default Main;
