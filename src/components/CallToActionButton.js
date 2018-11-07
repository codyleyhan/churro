import React from 'react';

import '../styles/Button.scss';

const CallToActionButton = (props) => {
  return (
    <button className="button button--call-to-action" {...props}>{ props.children }</button>
  )
}

export default CallToActionButton;
