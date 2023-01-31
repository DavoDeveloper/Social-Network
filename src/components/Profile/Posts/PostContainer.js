import React from "react";
import { AddPostActionCreater, NewPostValueActionCreator } from "../../../redux/post-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
  let AddPost = () => {
    props.dispatch(AddPostActionCreater());
  };

  let newPostValue = (text) => {
    props.dispatch(NewPostValueActionCreator(text));
  };

  return <Posts state={props.state} onchanged={AddPost} newPostText={newPostValue} posts={props.posts} />;
};

export default PostsContainer;
