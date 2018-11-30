import React from 'react';
import { Link } from "react-router-dom";

import groupStore from '../stores/groups';
import userStore from '../stores/users';
import CircleInitials from './CircleInitials';
import CallToActionButton from './CallToActionButton';
import Notif from "./Notif.js";

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
    document.getElementById(task.name).style.top = 0;
    task.currentQueue.push(task.currentQueue.shift());
    setTimeout(()=>{document.getElementById(task.name).style.top = "-50px";}, 2000);
  }

  let random_churros = Math.floor(Math.random() * 100);

  return (
    <section className="focused-task-card">
      <Notif id={task.name} notifText={task.name+" - Done! You earned " + random_churros + " churros!"}/>
      <div className="focused-task-content">
        <header className="focused-task-card-name"> 
          <div className="focused-task-close">
            <Link className="focused-task-close-button" to={closeURL}>x</Link>
          </div>
          <h2>{task.name}</h2>
        </header>
        <p className="focused-task-card-desc">
          {task.description}
        </p>

        <ul className="focused-task-queue">
          {queue}
        </ul>
        {userStore.currentUser == task.currentQueue[0] ?
          (<CallToActionButton onClick={handleComplete}>COMPLETE TASK</CallToActionButton>)
          :
          null
         }
        
      </div>
    </section>
  )
}

export default FocusedTask;
