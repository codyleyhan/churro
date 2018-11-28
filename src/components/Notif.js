import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react"

import groupStore from '../stores/groups';
import userStore from '../stores/users';

import '../styles/Notif.scss';

const Notif = observer(class Notif extends Component {
  render() {
    return (
      <div id={this.props.id} className="Notif">
        {this.props.notifText}
      </div>
    )
  }
});

export default Notif;