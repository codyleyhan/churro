import React, { Component } from 'react';

import TaskCard from './TaskCard';
import FocusedTask from './FocusedTask';
import NavBar from './NavBar';

import store from '../store';
import '../styles/MyTasks.scss';

class MyTasks extends Component {
  render() {
    let focusedTask;

    const tasks = store.tasks.reduce((m, task) => {
      if (this.props.match.params.id) {
        if (task.id === this.props.match.params.id) {
          focusedTask = task;
        }
      }

      if (task.currentQueue[0] === '908fdsg09dfg809') {
        m[task.schedule].push(task);
      } else if (task.currentQueue[1] === '908fdsg09dfg809') {
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

    let complete = this.props.match.url.includes('complete');

    const cards = Object.entries(tasks).map(kv => {
      console.log(kv);
      return (<TaskCard key={kv[0]} title={kv[0]} tasks={kv[1]} complete={complete} completed_task={focusedTask} />)
    })

    console.log(focusedTask);
    return (
      <div>
      <NavBar > lit </NavBar>
      <div className="MyTasks">
  
        <h1 className="center">The CSS Slayers</h1>
        <h2 className="center">My Tasks</h2>
        
        <section className="my-tasks-columns">
         <div className="my-tasks-cards">
          {cards}
         </div>
         {focusedTask && (<FocusedTask task={focusedTask} complete={complete} />)}
        </section>
      </div>
      </div>
    );
  }
}

export default MyTasks;
