import React from 'react';

import '../styles/Button.scss';

const Button = (props) => {
  let stylename = '';
  if (props && props.stylename) stylename = props.stylename;
  return (
    <button className={`button ${stylename}`} {...props} >{ props.children }</button>
  )
}

export default Button;
