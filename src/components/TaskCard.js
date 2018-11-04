import React from 'react';

import '../styles/TaskCard.scss';

const TaskCard = ({title, tasks}) => {
  if (tasks.length === 0) {
    return null;
  }

  const items = tasks.map(task => {
    const parts = task.currentQueue[0].split(" ");
    const initials = parts[0][0] + parts[1][0]; 

    return (
      <li key={task.id} className="task-card-item">
        <span><span className="task-card-check"><i class="far fa-check-circle"></i></span>{task.name} <span className="task-card-name">{initials}</span></span>
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
