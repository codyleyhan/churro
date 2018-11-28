import React from "react";
import { Link } from "react-router-dom";
import { Route, NavLink, withRouter } from "react-router-dom";
import { push as Menu } from "react-burger-menu";

import userStore from "../stores/users";

import "../styles/NavBar.scss";
import CircleInitials from "./CircleInitials";


const NavBar = ({ team }) => {
  return (
    <Menu>
      <NavLink exact className="link" to={"/"}>
        HOME
      </NavLink>
      <NavLink exact className="link" to={"/groups"}>
        GROUPS
      </NavLink>
      <NavLink exact className="link" to={"/addchore"}>
        ADD TASK
      </NavLink>
      <NavLink exact className="link" to={"/"} onClick={() => {userStore.logout()}}>
        LOGOUT
      </NavLink>
    </Menu>
  );
};

export default NavBar;
