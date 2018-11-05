import React from 'react';
import { Link } from "react-router-dom";

import store from '../store';
import CircleInitials from './CircleInitials';

import '../styles/FocusedTask.scss'

const FocusedTask = ({ task }) => {
  const queue = task.currentQueue.map(id => {
    const user = store.users[id];

    return (
      <li key={id} className="focused-task-queue-item">
        <span><CircleInitials name={user.name} color={user.color} style={{display: 'inline'}} /> {user.name}</span>
      </li>
    )
  });


  return (
    <section className="focused-task-card">
      <div className="focused-task-content">
        <div className="focused-task-close">
          <Link className="focused-task-close-button" to="/tasks">x</Link>
        </div>
        <header className="focused-task-card-name"> 
          <h2>{task.name}</h2>
        </header>

        <h4>Description</h4>
        <p className="focused-task-card-desc">
          {task.description}
        </p>

        <h4>Current Queue</h4>
        <ul className="focused-task-queue">
          {queue}
        </ul>

        <button className="focused-task-button focused-task-button-complete">Complete Task</button>
      </div>
    </section>
  )
}

export default FocusedTask;
