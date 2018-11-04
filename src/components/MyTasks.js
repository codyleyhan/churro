import React, { Component } from 'react';

import TaskCard from './TaskCard';

import store from '../store';
import '../styles/MyTasks.scss';

class MyTasks extends Component {
  render() {
    const tasks = store.tasks.reduce((m, task) => {
      console.log(task.schedule);
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

    const cards = Object.entries(tasks).map(kv => {
      return (<TaskCard key={kv[0]} title={kv[0]} tasks={kv[1]}/>)
    })

    return (
      <div className="MyTasks">
        <h1>The CSS Slayers</h1>
        <h2>My Tasks</h2>
        
        {cards}
      </div>
    );
  }
}

export default MyTasks;
