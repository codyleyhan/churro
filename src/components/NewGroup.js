import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "./Button";
import Input from "./Input";

import "../styles/Main.scss";
import "../styles/NewGroup.scss";

class NewGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: "group-name",
      groupName: "",
      roommates: []
    };
  }

  formFlow = (current_step, next_step) => e => {
    let newState = { step: next_step };
    if (current_step == "group-name") {
      newState.groupName = document.getElementById("group-name-input").value;
    }
    this.setState(newState);
  };

  addRoommate = () => {
    let roommates = this.state.roommates;
    let new_roommate = {
      name: document.getElementById("roommate-name-input").value,
      email: document.getElementById("roommate-email-input").value
    };
    roommates.push(new_roommate);
    document.getElementById("roommate-name-input").value = "";
    document.getElementById("roommate-email-input").value = "";
    this.setState({ roommates: roommates });
  };

  onKeyPress = fn => e => {
    console.log('key pressed', e.key);
    if (e.key === 'Enter') {
      console.log('here', fn);
      fn();
    }
  }

  getFormElement() {
    let formElement;
    let roommates = this.state.roommates;
    let _this = this;
    if (this.state.step == "group-name") {
      formElement = (
        <div className="form group-name">
          <p>What is your group name?</p>
          <Input id="group-name-input" placeholder="Group Name"
            onKeyPress={this.onKeyPress(this.formFlow("group-name", "roommates"))}
          />
          <Button
            stylename="button--next"
            onClick={this.formFlow("group-name", "roommates")}
          />
        </div>
      );
    } else if (this.state.step == "roommates") {
      formElement = (
        <div className="form roommates">
          <h4 className="form-title">{this.state.groupName}</h4>
          <p>Who are the roommates in this group?</p>
          {roommates.map(function(roommate, index) {
            return <div key={index}>{roommate.name}</div>;
          })}
          <Input id="roommate-name-input" placeholder="Roommate Name" />
          <Input id="roommate-email-input" placeholder="Roommate Email" 
            onKeyPress={this.onKeyPress(_this.addRoommate)}
          />
          <div>
            <Button
              stylename="button--back"
              onClick={this.formFlow("roommates", "group-name")}
            />
            <Button
              stylename="button--call-to-action"
              onClick={_this.addRoommate}
            >
              {" "}
              Add Roommate +
            </Button>
            <Link to="/addchore">
              <Button>Added All Roommates ></Button>
            </Link>
          </div>
        </div>
      );
    }
    return formElement;
  }

  render() {
    let formElement = this.getFormElement();
    return (
      <div className="Main">
        <div className="container">
          <div className="NewGroup">{formElement}</div>
        </div>
      </div>
    );
  }
}

export default NewGroup;