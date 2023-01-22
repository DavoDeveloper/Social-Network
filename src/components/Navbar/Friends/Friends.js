import React from "react";
import Friend from "./Friend";
import s from "./Friends.module.css";

const Friends = (props) => {
  let newFriend = props.friends.map((f) => <Friend name={f.name} imgUrl={f.imgUrl} />);

  return (
    <div>
      <h4 className={s.title}>Friends</h4>
      <div className={s.friendBlock}>{newFriend}</div>
    </div>
  );
};

export default Friends;
