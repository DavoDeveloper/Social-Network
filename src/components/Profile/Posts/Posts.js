import React from "react";
import Post from "./Post";
import s from "./Posts.module.css";

const Posts = (props) => {
  let newPosts = props.posts.map((p) => <Post message={p.message} like={p.like} />);
<<<<<<< HEAD
  let newPost = React.createRef();

  let AddPost = () => {
    props.dispatch({ type: "NEW-POST" });
  };

  let newPostValue = () => {
    let text = newPost.current.value;
    props.dispatch({ type: "NEW-POST-TEXT", newText: text });
    console.log(text);
=======
  // let newPost = React.createRef();
  let inputValue = props.state.posts.profilePage.newPostText;

  let AddPost = () => {
    props.onchanged();
    // newPost.current.value = "";
  };

  let newPostValue = (e) => {
    let text = e.target.value;
    props.newPostText(text);
>>>>>>> bfbbd7e799d9bfde6f34eb73da2500f287546437
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
