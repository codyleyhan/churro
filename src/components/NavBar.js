import React from 'react';
import { Link } from "react-router-dom";
import { Route, NavLink, withRouter } from "react-router-dom";
import { push as Menu } from "react-burger-menu";

import store from '../store';

import '../styles/NavBar.scss'
import CircleInitials from './CircleInitials';


const NavBar = ({team}) => {
  return (
        <Menu
        >
          <NavLink
            exact
            to={"/"}
          >
            HOME
          </NavLink>
          <NavLink
            exact
            to={"/"}
          >
            INFO
          </NavLink>
          <NavLink
            exact
            to={"/tasks"}
          >
            TASKS
          </NavLink>
        </Menu>
  )
}

export default NavBar;
