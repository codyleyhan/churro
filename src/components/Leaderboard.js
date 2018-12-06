import React, { Component } from 'react';
import { observer } from "mobx-react"
import { Link } from "react-router-dom";
import Spinner from 'react-spinkit';

import userStore from '../stores/users';
import groupStore from '../stores/groups';

import Button from "./Button";
import NavBar from "./NavBar";

import '../styles/Main.scss';
import '../styles/NewGroup.scss';
import '../styles/GroupList.scss';
import '../styles/Leaderboard.scss';

const Leaderboard = observer(class GroupList extends Component {
  componentDidMount() {
    const groupID = this.props.match.params.group;
    groupStore.get(groupID);
  }

  render() {
    let content = (
      <div>
        <Spinner name='double-bounce' />
      </div>
    );

    const groupID = this.props.match.params.group;
    let leaderboard = '';
    if (!groupStore.isFetching) {
      let users = groupStore.group.users;
      leaderboard = Object.entries(users).map(kv=>{
        return (
          <tr className="leaderboard-row" key={kv[0]}>
            <td>{kv[1].name}</td>
            <td>{Math.floor(Math.random() * 100)}</td>
          </tr>)
      });
    }
    content = (
      <section className="GroupList">
        <h1>Leaderboard</h1>
        <table className="leaderboard-table">
          <thead>
          <tr className="leaderboard-row">
            <th>Name</th>
            <th>Churros</th>
          </tr>
          </thead>
          <tbody>{leaderboard}</tbody>
        </table>
      </section>
    )
    return (
      <div>
      <NavBar />
        <div className="container">
          <div className="NewGroup">
          <div className="form group-name">
            {content}
            <Button stylename="" onClick={() => this.props.history.goBack()}>Back</Button>
          </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Leaderboard;
