import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react"
import Spinner from 'react-spinkit';

import TaskCard from "./TaskCard";
import FocusedTask from "./FocusedTask";
import NavBar from "./NavBar";
import AddChoreButton from "./AddChoreButton";
import Notif from "./Notif.js";

import groupStore from '../stores/groups';
import userStore from '../stores/users';

import '../styles/MyTasks.scss';
import churro from '../img/churro.svg';

const MyTasks = observer(class MyTasks extends Component {
  componentDidMount() {
    const groupID = this.props.match.params.group;
    groupStore.get(groupID);
  }

  render() {
    let content = (<Spinner className="center" name='double-bounce' />);
    const groupID = this.props.match.params.group;
    if (!groupStore.isFetching) {
      let focusedTask;
      const tasks = groupStore.group.tasks.reduce((m, task) => {
        if (this.props.match.params.id) {
          if (task.id.toString() === this.props.match.params.id) {
            focusedTask = task;
          }
        }

        if (task.currentQueue[0] === userStore.currentUser) {
          m[task.schedule].push(task);
        } else if (1 < task.currentQueue.length && task.currentQueue[1] === userStore.currentUser) {
          m["Coming up"].push(task);
        }
        
        return m;
      }, {
        "Daily": [],
        "Weekly": [],
        "Biweekly": [],
        "Monthly": [],
        "As Needed": [],
        "Coming up": [],
      });

      const cards = Object.entries(tasks).map(kv => {
        return (<TaskCard key={kv[0]} title={kv[0]} tasks={kv[1]} />)
      });

      content = (
        <div>
          <div className="group-heading center">
            <img className="churro-img" src={churro} />
            <h1>{groupStore.group.name}</h1>
          </div>
            <p className="chores-list-title center">Chores List</p>
            <section className="my-tasks-columns">
              <div className="my-tasks-cards">
                {cards}
              </div>
              {focusedTask && (<FocusedTask task={focusedTask} closeURL={"/groups/" + groupID + "/tasks"} />)}
            </section>
        </div>
      )
    }

    return (
      <div>
        <NavBar />
        <div className="MyTasks">
          {content}
        </div>
        <Link to={"/groups/" + groupID + "/addchore"}>
          <AddChoreButton />
        </Link>
      </div>
    );
  }
})

export default MyTasks;
