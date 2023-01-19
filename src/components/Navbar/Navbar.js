import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.bar}>
      <div className={s.item}>Profile</div>
      <div className={s.item}>Messages</div>
      <div>News</div>
      <div>Music</div>
      <div>Settings</div>
    </div>
  );
};

export default Navbar;
