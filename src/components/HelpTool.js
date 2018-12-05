import React from "react";

import "../styles/HelpTool.scss";

const HelpTool = ({ info }) => {
  return (
    <i class="fas fa-info-circle tool-icon">
      <span class="info">{info}</span>
    </i>
  );
};

export default HelpTool;
