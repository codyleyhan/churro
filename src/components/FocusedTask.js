import React from 'react';
import { Link } from "react-router-dom";

import groupStore from '../stores/groups';
import CircleInitials from './CircleInitials';
import CallToActionButton from './CallToActionButton';

import '../styles/FocusedTask.scss'

const FocusedTask = ({ task, closeURL }) => {
  const queue = task.currentQueue.map(email => {
    const user = groupStore.group.users[email];
    return (
      <li key={email} className="focused-task-queue-item">
        <span><CircleInitials name={user.name} color={user.color} style={{display: 'inline'}} />{user.name}</span>
      </li>
    )
  })

  const handleComplete = () => {
    task.currentQueue.push(task.currentQueue.shift());
  }

  return (
    <section className="focused-task-card">
      <div className="focused-task-content">
        <div className="focused-task-close">
          <Link className="focused-task-close-button" to={closeURL}>x</Link>
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

        <CallToActionButton onClick={handleComplete}>COMPLETE TASK</CallToActionButton>
      </div>
    </section>
  )
}

export default FocusedTask;