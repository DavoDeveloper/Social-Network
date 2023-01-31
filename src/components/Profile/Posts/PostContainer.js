import React from "react";
import { AddPostActionCreater, NewPostValueActionCreator } from "../../../redux/post-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
  let state = props.store.getState();
  let AddPost = () => {
    props.store.dispatch(AddPostActionCreater());
  };

  let newPostValue = (text) => {
    props.store.dispatch(NewPostValueActionCreator(text));
  };
  return <Posts onchanged={AddPost} newPostText={newPostValue} profilePage={state.posts.profilePage} />;
};

export default PostsContainer;
