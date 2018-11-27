import React, { Component } from 'react';
import { observer } from "mobx-react"
import { Link } from "react-router-dom";
import Spinner from 'react-spinkit';


import userStore from '../stores/users';

import '../styles/Main.scss';
import '../styles/NewGroup.scss';

const GroupList = observer(class GroupList extends Component {
  constructor(props) {
    super(props);
    userStore.fetchCurrentUsersGroups();
  }

  render() {
    let content = (<Spinner name="folding-cube" />);

    if (!userStore.fetching) {
      const groups = userStore.usersGroups.map(group => {
        return (
          <li key={group.id}>
            <Link to={"/groups/" + group.id + "/tasks"}>{group.name}</Link>
          </li>
        )
      });
      content = (
        <ul>
          {groups}
        </ul>
      )
    }
    return (
      <div className="Main">
        <div className="container">
          <div className="NewGroup">
          <div className="form group-name">
            {content}
          </div>
          </div>
        </div>
      </div>
    );
  }
});

export default GroupList;
