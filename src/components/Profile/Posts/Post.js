import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="" />
      <div>
        <div className="item">{props.message}</div>
        <small>Likes: {props.like}</small>
      </div>
    </div>
  );
};

export default Post;
