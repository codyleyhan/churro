import React from 'react';

import store from '../store';

import '../styles/CircleInitials.scss'

const CircleInitials = ({ name, color }) => {
  const parts = name.split(" ");
  const initials = parts[0][0] + parts[1][0]; 

  return (
    <p style={{backgroundColor: color}} className="circle-initials">
      {initials}
    </p>
  )
}

export default CircleInitials;
