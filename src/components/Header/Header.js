import React from "react";
import s from "./Header.module.css";
import "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="container mb-3">
      <nav className="navbar navbar-light bg-light p-0">
        <img src="https://i.pinimg.com/736x/de/a0/f3/dea0f3b7f480b1151c08db4a402a43b9.jpg" alt="" />
        <div className={s.loginBlock}>{props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}</div>
      </nav>
    </div>
  );
};

export default Header;
