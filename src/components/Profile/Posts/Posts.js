import React from "react";
import { AddPostActionCreater, NewPostValueActionCreator } from "../../../state";
import Post from "./Post";
import s from "./Posts.module.css";

const Posts = (props) => {
  let newPosts = props.posts.map((p) => <Post message={p.message} like={p.like} />);

  let newPost = React.createRef();

  let AddPost = () => {
    props.dispatch(AddPostActionCreater());
    newPost.current.value = "";
  };

  let newPostValue = () => {
    let text = newPost.current.value;
    props.dispatch(NewPostValueActionCreator(text));
  };

  return (
    <div>
      <div>
        <h3 className={s.posts}>My Posts</h3>
      </div>
      <h3>New Post</h3>
      <div className={s.add_post}>
        <textarea ref={newPost} class="form-control" id="exampleFormControlTextarea1" onChange={newPostValue}></textarea>
        <button onClick={AddPost} className="btn btn-outline-dark">
          Add new Post
        </button>
      </div>
      {newPosts}
    </div>
  );
};

export default Posts;
