import React from 'react';
import { Link } from "react-router-dom";

import store from '../store';
import CircleInitials from './CircleInitials';
import CallToActionButton from './CallToActionButton';

import '../styles/FocusedTask.scss'

const FocusedTask = ({ task, complete, users}) => {

  let queue = [];
  for (var i=task.current; i<users.length; i++) {
    queue.push(
      <li key={i} className="focused-task-queue-item">
        <span><CircleInitials name={users[i%users.length].name} color={users[i%users.length].color} style={{display: 'inline'}} /> {users[i%users.length].name}</span>
      </li>
    );
  }

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
