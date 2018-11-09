import React from 'react';
import { Link } from "react-router-dom";

import store from '../store';
import CircleInitials from './CircleInitials';
import CallToActionButton from './CallToActionButton';

import '../styles/FocusedTask.scss'

const FocusedTask = ({ task, complete }) => {
  let queue = task.currentQueue.map(id => {
    const user = store.users[id];

    return (
      <li key={id} className="focused-task-queue-item">
        <span><CircleInitials name={user.name} color={user.color} style={{display: 'inline'}} /> {user.name}</span>
      </li>
    )
  });

  if (complete) {
    let first = queue[0];
    queue = queue.slice(1, queue.length);
    queue.push(first);
  }

  return (
    <section className="focused-task-card">
      <div className="focused-task-content">
        <div className="focused-task-close">
          <Link className="focused-task-close-button" to="/tasks">x</Link>
        </div>
        <header className="focused-task-card-name"> 
          <h2>{task.name}</h2>
        </header>
        <p className="focused-task-card-desc">
          {task.description}
        </p>

        <ul className="focused-task-queue">
          {queue}
        </ul>

        <Link to={"/tasks/" + task.id + "/complete"}><CallToActionButton>COMPLETE TASK</CallToActionButton></Link>
      </div>
    </section>
  )
}

export default FocusedTask;
