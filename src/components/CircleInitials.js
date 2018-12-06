import React from "react";

import "../styles/CircleInitials.scss";

const CircleInitials = ({ name, color }) => {
  const parts = name.split(" ");
  let initials = parts[0][0];
  if (1 < parts.length) {
    initials += parts[1][0];
  }

  return (
    <p style={{ backgroundColor: color }} className="circle-initials">
      {initials}
      <span class="full-name">{name}</span>
    </p>
  );
};

export default CircleInitials;
