import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import NavBar from "./NavBar";
import Input from "./Input";
import Button from "./Button";
import Notif from "./Notif";
import options from "./FrequencyOptions"
import Select from 'react-select';

import "../styles/AddChore.scss";

import groupStore from '../stores/groups';

class AddChore extends Component {
  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  handleComplete = () => {
    document.getElementById("add-chore-popup").style.top = 0;
    setTimeout(()=>{document.getElementById("add-chore-popup").style.top = "-50px";}, 3000);
  }

  addChore = () => {
    let new_chore = {
      name: document.getElementById('task-name').value,
      description: document.getElementById('task-desc').value,
      frequency: this.state.selectedOption? this.state.selectedOption.value : options[0].value
    }
    document.getElementById('task-name').value = '';
    document.getElementById('task-desc').value = '';
    groupStore.addTask(new_chore.name, new_chore.description, new_chore.frequency);
    this.handleComplete();
  }

  render() {
    const selectedOption = this.state.selectedOption;
    return (
      <div>
        <NavBar />
        <div className="MyTasks center AddChore">
          <Notif id="add-chore-popup" notifText="Chore was added!" />
          <h2>Add Chore</h2>
          <Input id="task-name" placeholder="Chore Name" />
          <br />
          <textarea
            className="text-input"
            id="task-desc"
            placeholder="Chore Description"
          />
          <br />
          <div style={{width: "300px"}}>
           <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            placeholder="Frequency"
            />
          </div>
          <br />
          <div>
            <Button stylename="button--call-to-action" onClick={this.addChore}>Add Chore</Button>
            <Button stylename="" onClick={() => this.props.history.goBack()}>Cancel</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddChore;
