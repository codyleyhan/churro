import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

import Button from "./Button";
import Input from "./Input";

import "../styles/Main.scss";
import "../styles/NewGroup.scss";

import newGroupStore from '../stores/newGroup';
import userStore from '../stores/users';

const NewGroup = observer(class NewGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: props.location.state ? props.location.state : "your-name",
    };
  }

  formFlow = (current_step, next_step) => e => {
    let newState = { step: next_step };
    this.setState(newState);
  };

  addRoommate = () => {
    let new_roommate = {
      name: document.getElementById("roommate-name-input").value,
      email: document.getElementById("roommate-email-input").value
    };
    document.getElementById("roommate-name-input").value = "";
    document.getElementById("roommate-email-input").value = "";
    newGroupStore.addUser(new_roommate.name, new_roommate.email);
  };

  onKeyPress = fn => e => {
    if (e.key === 'Enter') {
      fn();
    }
  }

  onUsersName = () => {
    const name = document.getElementById("user-name-input").value;
   
    if (name && name.trim()) {
      console.log(name)
      this.formFlow("your-name", "group-name")();
      newGroupStore.addUser(name, userStore.currentUser);
    }
  }

  getFormElement() {
    let formElement;
    let _this = this;
    if (this.state.step === "your-name") {
      formElement =(
        <div className="form group-name">
          <p>What is your name?</p>
          <Input id="user-name-input" placeholder="Your Name"
            onKeyPress={this.onKeyPress(this.onUsersName)}
          />
          <Button
            stylename="button--next"
            onClick={() => {this.onUsersName()}}
          />
        </div>
      );
    }

    if (this.state.step === "group-name") {
      formElement = (
        <div className="form group-name">
          <p>What is your group name?</p>
          <Button
            stylename="button--back"
            onClick={this.formFlow("group-name", "your-name")}
          />
          <Input id="group-name-input" placeholder="Group Name"
            onKeyPress={this.onKeyPress(this.formFlow("group-name", "roommates"))}
            value={newGroupStore.name}
            onChange={(e) => newGroupStore.name = e.target.value}
          />
          <Button
            stylename="button--next"
            onClick={this.formFlow("group-name", "roommates")}
          />
        </div>
      );
    } else if (this.state.step === "roommates") {
      formElement = (
        <div className="form roommates">
          <h4 className="form-title">{this.state.groupName}</h4>
          <p>Who are the roommates in this group?</p>
          {Object.values(newGroupStore.users).map(function(roommate, index) {
            return <div key={index}>{roommate.name} - {roommate.email}</div>;
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
            <Link to={{ pathname: '/newchores', state: { groupName: this.state.groupName} }}>
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
})

export default NewGroup;
