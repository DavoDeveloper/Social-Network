import React from "react";
import Post from "./Post";
import s from "./Posts.module.css";

const Posts = () => {
  return (
    <div>
      <div>
        <h3 className={s.posts}>My Posts</h3>
      </div>
      <h3>New Post</h3>
      <div className={s.add_post}>
        <textarea class="form-control" id="exampleFormControlTextarea1"></textarea>
        <button className="btn btn-outline-dark">Add new Post</button>
      </div>
      <Post message="Hi!,how are you" like="50" />
      <Post message="Its my first post" like="35" />
    </div>
  );
};

export default Posts;
