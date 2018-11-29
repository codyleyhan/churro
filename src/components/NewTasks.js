import React, { Component } from 'react';
import { Link } from "react-router-dom";

import CallToActionButton from './CallToActionButton';
import Button from './Button';
import Input from './Input';

import '../styles/Main.scss';
import '../styles/NewGroup.scss';

class NewChores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chores: []
    }
    this.state.groupName = props.location.state.groupName;
  }

  addChore = () => {
    let chores = this.state.chores;
    let new_chore = {
      name: document.getElementById('chore-name-input').value,
      description: document.getElementById('chore-email-input').value,
      frequency: document.getElementById('chore-frequency-input').value
    }
    chores.push(new_chore);
    document.getElementById('chore-name-input').value = '';
    document.getElementById('chore-email-input').value = '';
    document.getElementById('chore-frequency-input').value = 'Daily';
    this.setState({chores: chores});
  }

  getFormElement() {
    let formElement;
    let chores = this.state.chores;
    let _this = this;
    
    formElement = 
    <div className="form roommates">
      <h4 className="form-title">{this.state.groupName}</h4>
      <p>What are the chores y'all have to do?</p>
      {
        chores.map(function(chore, index){
          return <div key={index}>{chore.name} - {chore.frequency}</div>
        })
      }
      <Input id="chore-name-input" placeholder="Chore Name"/>
      <Input id="chore-email-input" placeholder="Chore Description"/>
      <div style={{paddingTop: "25px"}}>Frequency:{" "}
        <select id="chore-frequency-input" defaultValue="daily">
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Biweekly">Biweekly</option>
        </select>
      </div>
      <div>
        <Button stylename="button--call-to-action" onClick={_this.addChore}> Add Chore +</Button>
        <Link to='/groups'><Button>Added All Chores ></Button></Link>
      </div>
    </div>
    
    return formElement
  }

  render() {
    let formElement = this.getFormElement()
    return (
      <div className="Main">
        <div className="container">
          <div className="NewGroup">
            {formElement}
          </div>
        </div>
      </div>
    );
  }
}

export default NewChores;
