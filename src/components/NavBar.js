import React from "react";
import { Link } from "react-router-dom";
import { Route, NavLink, withRouter } from "react-router-dom";
import { push as Menu } from "react-burger-menu";

import store from "../store";

import "../styles/NavBar.scss";
import CircleInitials from "./CircleInitials";

const NavBar = ({ team }) => {
  return (
    <Menu>
      <NavLink exact className="link" to={"/"}>
        HOME
      </NavLink>
      <NavLink exact className="link" to={"/tasks"}>
        TASKS
      </NavLink>
      <NavLink exact className="link" to={"/addchore"}>
        ADD TASK
      </NavLink>
      <NavLink exact className="link" to={"/tasks"}>
        INFO
      </NavLink>
    </Menu>
  );
};

export default NavBar;
