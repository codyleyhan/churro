import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

import Button from './Button';
import Input from './Input';

import '../styles/Main.scss';
import '../styles/NewGroup.scss';

import newGroupStore from '../stores/newGroup';

const suggestedChores = [
  {
    name: 'Do the dishes',
    description: 'Don\'t forget to squeeze out the sponge after.',
    frequency: 'Daily'
  },
  {
    name: 'Take out the trash',
    description: 'Put in a new bag too!',
    frequency: 'As Needed'
  },
  {
    name: 'Maintenance request',
    description: 'Let everyone know afterwards',
    frequency: 'As Needed'
  },
  {
    name: 'Vaccum the floor',
    description: 'Empty out the vaccum after too.',
    frequency: 'Biweekly'
  },
  {
    name: 'Sweep the floor',
    description: 'Make sure to do a decent job.',
    frequency: 'Biweekly'
  },
]

const NewChores = observer(class NewChores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: suggestedChores,
    }
  } 

  addChore = () => {
    let new_chore = {
      name: document.getElementById('chore-name-input').value,
      description: document.getElementById('chore-email-input').value,
      frequency: document.getElementById('chore-frequency-input').value
    }
    document.getElementById('chore-name-input').value = '';
    document.getElementById('chore-email-input').value = '';
    document.getElementById('chore-frequency-input').value = 'Daily';
    newGroupStore.addTask(new_chore.name, new_chore.description, new_chore.frequency);
  }

  saveGroup = () => {
    newGroupStore.save().then(group => {
      this.props.history.push('/groups/' + group.id + '/tasks');
      newGroupStore.clear();
      console.log('cleared');
    })
  }

  onKeyPress = fn => e => {
    if (e.key === 'Enter') {
      fn();
    }
  }

  onSuggestionClick = (task, idx) => e => {
    newGroupStore.addTask(task.name, task.description, task.frequency);
    let newSuggestions = [...this.state.suggestions];
    newSuggestions.splice(idx, 1);
    this.setState({
      suggestions: newSuggestions
    });
  }

  render() {
    const suggestions = this.state.suggestions.map((task, idx) => {
      return (
        <button key={idx} className="suggested-chores" onClick={this.onSuggestionClick(task, idx)}>{task.name}</button>
      );
    })
    return (
      <div className="Main">
        <div className="container">
          <div className="NewGroup">
            <div className="form roommates">
              <h4 className="form-title">{newGroupStore.name}</h4>
              <span>What are the chores y'all have to do?</span>
              {
                newGroupStore.tasks.map((task ) => { 
                  return <div className="chore-todo" key={task.id}>{task.name} - {task.schedule}</div>
                })
              }
              <Input id="chore-name-input" placeholder="Chore Name"/>
              <Input id="chore-email-input" placeholder="Chore Description"
                onKeyPress={this.onKeyPress(this.addChore)}
              />
              <div style={{paddingTop: "25px"}}>Frequency:{" "}
                <select id="chore-frequency-input" defaultValue="daily">
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Biweekly">Biweekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="As Needed">As Needed</option>
                </select>
              </div>
              <div>
                <Link to={{ pathname: '/new', state: "roommates"}}>
                  <Button
                    stylename="button--back"
                  />
                </Link>
                <Button stylename="button--call-to-action" onClick={this.addChore}> Add Chore +</Button>
                <Button onClick={this.saveGroup}>Added All Chores ></Button>
              </div>
              {
                0 < suggestions.length ? (
                  <div >
                    <p>Suggestions</p>
                    <div className="suggestions-container">{suggestions}</div>
                  </div>
                ) : null
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
})

export default NewChores;
