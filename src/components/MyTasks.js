import React, { Component } from "react";
import { Link } from "react-router-dom";

import TaskCard from "./TaskCard";
import FocusedTask from "./FocusedTask";
import NavBar from "./NavBar";
import AddChoreButton from "./AddChoreButton";

import store from '../store';
import firebase from './../Firebase.js';
import '../styles/MyTasks.scss';

class MyTasks extends Component {

  constructor(props) {
    super(props);
    this.state = {data: null};

    this.readDB = this.readDB.bind(this);
  }

  componentDidMount() {
    this.readDB();
  }

  readDB() {
    const groups = firebase.database().ref('group');
    groups.once('value', (snapshot) => {
      console.log(snapshot.val());
      this.setState({
        data: snapshot.val()
      });
    });
    console.log(this.state.data);
  }

  render() {
    var focusedTask = null;
    let team = 'CSS_Slayers';
    if (this.state.data) {
      console.log(this.state.data[team]);
    }

    var cards = null;
    var complete = false;
    if (this.state.data) {
      console.log('entered');
      let team = 'CSS_Slayers';
      const tasks = this.state.data[team].tasks.reduce((m, task) => {
        if (this.props.match.params.id) {
          if (task.id == this.props.match.params.id) {
            focusedTask = task;
          }
        }

        if (task.current === 0) {
          m[task.schedule].push(task);
        } else {
          m["Coming up"].push(task);
        }
        
        return m;
      }, {
        "Daily": [],
        "Weekly": [],
        "Biweekly": [],
        "Monthly": [],
        "As needed": [],
        "Coming up": [],
      });
      console.log(tasks);

      complete = this.props.match.url.includes('complete');

      cards = Object.entries(tasks).map(kv => {
        console.log(kv);
        return (<TaskCard key={kv[0]} title={kv[0]} tasks={kv[1]} complete={complete} completed_task={focusedTask} users={this.state.data[team].users} />)
      })
      console.log(cards);
      console.log(focusedTask);
    }
    console.log(cards);
    return (
      <div>
        <NavBar />
        <div className="MyTasks">
          <h1 className="center">The CSS Slayers</h1>
          <h2 className="center">My Tasks</h2>

          <section className="my-tasks-columns">
            <div className="my-tasks-cards">{cards}</div>
            {focusedTask && (<FocusedTask task={focusedTask} complete={complete} users={this.state.data[team].users} />)}
          </section>
        </div>
        <Link to="/addchore">
          <AddChoreButton />
        </Link>
      </div>
    );
  }
}

export default MyTasks;
