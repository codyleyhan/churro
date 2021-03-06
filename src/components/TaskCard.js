import React from 'react';
import { Link } from "react-router-dom";
import { observer } from "mobx-react"

import groupStore from '../stores/groups';

import '../styles/TaskCard.scss'
import CircleInitials from './CircleInitials';

const titleMappings = {
  "Daily": "TODAY",
  "Weekly": "THIS WEEK",
  "Biweekly": "IN THE NEXT TWO WEEKS",
  "Monthly": "THIS MONTH",
  "As Needed": "AS NEEDED",
  "Coming up": "COMING UP",
}

const TaskCard = ({ tasks, title }) => {
  if (tasks.length === 0) {
    return null;
  }
  const items = tasks.map(task => {
    console.log(task.currentQueue[0]);
    const user = groupStore.group.users[task.currentQueue[0]];
    console.log(task, groupStore.group.users);
    return (
      <li key={task.id} className="task-card-item">
          <span className="task-card-check"><i className="far fa-check-circle"></i></span>
          <span>{task.name}</span> 
          <span className="task-card-right">
            <CircleInitials name={user.name} color={user.color} alt={user.name} />
            <Link className="task-card-focus-button" to={"/groups/" + groupStore.group.id + "/tasks/" + task.id}><i className="fas fa-angle-right"></i></Link>
          </span>
      </li>
    )
  })
  return (
    <section className="task-card">
      <ul className="task-card-list">
        <header className="task-card-title"> 
          {titleMappings[title] ? titleMappings[title] : title}
        </header>
        {items}
      </ul>
    </section>
  )
}

export default observer(TaskCard);
