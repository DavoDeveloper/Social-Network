import React from "react";
import s from "./Loader.module.css";

let Loader = () => {
  return <div className={s["lds-dual-ring"]}></div>;
};

export default Loader;
