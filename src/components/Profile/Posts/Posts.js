import React from "react";
import Post from "./Post";
import s from "./Posts.module.css";

const Posts = (props) => {
  let newPosts = props.profilePage.posts.map((p) => <Post message={p.message} like={p.like} />);
  let inputValue = props.profilePage.newPostText;

  let AddPost = () => {
    props.onchanged();
  };

  let newPostValue = (e) => {
    let text = e.target.value;
    props.newPostText(text);
  };
  return (
    <div>
      <div>
        <h3 className={s.posts}>My Posts</h3>
      </div>
      <h3>New Post</h3>
      <div className={s.add_post}>
        <textarea value={inputValue} onChange={newPostValue} class="form-control" id="exampleFormControlTextarea1"></textarea>
        <button onClick={AddPost} className="btn btn-outline-dark">
          Add new Post
        </button>
      </div>
      {newPosts}
    </div>
  );
};

export default Posts;
