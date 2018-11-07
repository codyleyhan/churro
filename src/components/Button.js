import React from 'react';

import '../styles/Button.scss';

const Button = (props) => {
  return (
    <button className="button" {...props} >{ props.children }</button>
  )
}

export default Button;
