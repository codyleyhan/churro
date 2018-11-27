import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react"

import TaskCard from "./TaskCard";
import FocusedTask from "./FocusedTask";
import NavBar from "./NavBar";
import AddChoreButton from "./AddChoreButton";

import groupStore from '../stores/groups';
import userStore from '../stores/users';

import '../styles/MyTasks.scss';

const MyTasks = observer(class MyTasks extends Component {
  componentDidMount() {
    const groupID = this.props.match.params.group;
    groupStore.get(groupID);
  }

  render() {
    if (groupStore.isFetching) {
      return (
        <div>
        <NavBar />
        <h1>Loading!</h1>
        <Link to="/addchore">
          <AddChoreButton />
        </Link>
      </div>
      )
    }

    let focusedTask;
    const tasks = groupStore.group.tasks.reduce((m, task) => {
      if (this.props.match.params.id) {
        if (task.id === this.props.match.params.id) {
          focusedTask = task;
        }
      }

      if (task.currentQueue[0] === userStore.currentUser.email) {
        m[task.schedule].push(task);
      } else if (1 < task.currentQueue.length && task.currentQueue[1] === userStore.currentUser.email) {
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

    const cards = Object.entries(tasks).map(kv => {
      return (<TaskCard key={kv[0]} title={kv[0]} tasks={kv[1]} />)
    });

    const groupID = this.props.match.params.group;

    return (
      <div>
        <NavBar />
        <div className="MyTasks">
          <h1 className="center">{groupStore.group.name}</h1>
          <h2 className="center">My Tasks</h2>

          <section className="my-tasks-columns">
            <div className="my-tasks-cards">
              {cards}
            </div>
            {focusedTask && (<FocusedTask task={focusedTask} closeURL={"/" + groupID + "/tasks"} />)}
          </section>
        </div>
        <Link to="/addchore">
          <AddChoreButton />
        </Link>
      </div>
    );
  }
})

export default MyTasks;
