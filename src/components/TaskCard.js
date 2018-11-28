import React from 'react';
import { Link } from "react-router-dom";
import { observer } from "mobx-react"

import groupStore from '../stores/groups';

import '../styles/TaskCard.scss'
import CircleInitials from './CircleInitials';


const TaskCard = ({ tasks, title }) => {
  if (tasks.length === 0) {
    return null;
  }
  const items = tasks.map(task => {
    const user = groupStore.group.users[task.currentQueue[0]];
    return (
      <li key={task.id} className="task-card-item">
        <span>
          <span className="task-card-check"><i className="far fa-check-circle"></i></span>
          {task.name} 
          <span className="task-card-right">
            <CircleInitials name={user.name} color={user.color} />
            <Link className="task-card-focus-button" to={"/groups/" + groupStore.group.id + "/tasks/" + task.id}><i className="fas fa-angle-right"></i></Link>
          </span>
        </span>
      </li>
    )
  })
  return (
    <section className="task-card">
      <header className="task-card-title"> 
        {title}
      </header>
      <ul className="task-card-list">
        {items}
      </ul>
    </section>
  )
}

export default observer(TaskCard);
