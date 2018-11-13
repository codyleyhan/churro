import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import NavBar from "./NavBar";
import Input from "./Input";
import Button from "./Button";

import "../styles/AddChore.scss";

class AddChore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  addChore = () => {
    // TODO: USE FIREBASE TO ADD CHORE AND REDIRECT AS CALLBACK
    this.setState({ redirect: true });
    console.log(this.state.redirect);
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/tasks" />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <NavBar />
        <div className="MyTasks center">
          <h1>The CSS Slayers</h1>
          <h2>Add Task</h2>
          Name: <Input id="task-name-id" placeholder="Task Name" />
          <br />
          Description:{" "}
          <textarea
            className="text-input"
            id="task-desc-id"
            placeholder="Task Description"
          />
          <br />
          Frequency:{" "}
          <select id="task-freq-id" defaultValue="daily">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="biweekly">Biweekly</option>
          </select>
          <br />
          <Button stylename="" onClick={this.addChore}>
            Add Chore
          </Button>
        </div>
      </div>
    );
  }
}

export default AddChore;
