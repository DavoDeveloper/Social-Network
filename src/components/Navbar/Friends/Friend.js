import React from "react";
import s from "./Friends.module.css";

const Friend = (props) => {
  const styles = {
    backgroundImage: "url(" + props.imgUrl + ")",
  };
  return (
    <div className={s.friendItem}>
      <div className={s.friendImg} style={styles}></div>
      <span>{props.name}</span>
    </div>
  );
};
export default Friend;
