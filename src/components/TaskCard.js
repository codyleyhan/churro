import React from 'react';
import { Link } from "react-router-dom";

import userStore from '../stores/users';

import '../styles/TaskCard.scss'
import CircleInitials from './CircleInitials';


const TaskCard = ({ tasks, title }) => {
  const items = tasks.map(task => {
    const user = userStore.users[task.currentQueue[0]];
    
    return (
      <li key={task.id} className="task-card-item">
        <span>
          <span className="task-card-check"><i className="far fa-check-circle"></i></span>
          {task.name} 
          <span className="task-card-right">
            <CircleInitials name={user.name} color={user.color} />
            <Link className="task-card-focus-button" to={"tasks/" + task.id}><i className="fas fa-angle-right"></i></Link>
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

export default TaskCard;
