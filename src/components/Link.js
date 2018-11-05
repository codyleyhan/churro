import React from 'react';
import { Link as ReactLink } from "react-router-dom";


const Link = (props) => {
  const newTo = process.env.PUBLIC_URL + props.to;
  return (
    <ReactLink {...props} to={newTo} />
  )
}

export default Link;