import React from "react";
import { NavLink } from "react-router-dom";
import { push as Menu } from "react-burger-menu";

import userStore from "../stores/users";

import "../styles/NavBar.scss";


const NavBar = () => {
  return (
    <Menu style={{height: null}}>
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
