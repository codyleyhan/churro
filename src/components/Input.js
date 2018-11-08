import React from 'react';

import '../styles/Input.scss';

const Input = (props) => {
  return (
    <input className="input" {...props} >{ props.children }</input>
  )
}

export default Input;
