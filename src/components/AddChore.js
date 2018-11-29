import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import NavBar from "./NavBar";
import Input from "./Input";
import Button from "./Button";
import Notif from "./Notif";

import "../styles/AddChore.scss";

import groupStore from '../stores/groups';

class AddChore extends Component {
  handleComplete = () => {
    document.getElementById("add-chore-popup").style.top = 0;
    setTimeout(()=>{document.getElementById("add-chore-popup").style.top = "-50px";}, 3000);
  }

  addChore = () => {
    let new_chore = {
      name: document.getElementById('task-name').value,
      description: document.getElementById('task-desc').value,
      frequency: document.getElementById('task-freq').value
    }
    document.getElementById('task-name').value = '';
    document.getElementById('task-desc').value = '';
    document.getElementById('task-freq').value = 'Daily';
    console.log(new_chore);
    groupStore.addTask(new_chore.name, new_chore.description, new_chore.frequency);
    this.handleComplete();
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="MyTasks center AddChore">
          <Notif id="add-chore-popup" notifText="Chore was added!" />
          <h1>{groupStore.group.name}</h1>
          <h2>Add Chore</h2>
          <Input id="task-name" placeholder="Chore Name" />
          <br />
          <textarea
            className="text-input"
            id="task-desc"
            placeholder="Chore Description"
          />
          <br />
          Frequency:{" "}
          <select id="task-freq" defaultValue="daily">
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Biweekly">Biweekly</option>
            <option value="Monthly">Monthly</option>
            <option value="As Needed">As Needed</option>
          </select>
          <br />
          <Button stylename="button--call-to-action" onClick={this.addChore}>Add Chore</Button>
          <Button stylename="" onClick={() => this.props.history.goBack()}>Cancel</Button>
        </div>
      </div>
    );
  }
}

export default AddChore;
