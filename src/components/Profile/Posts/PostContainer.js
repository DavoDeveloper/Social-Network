import React from "react";
import { AddPostActionCreater, NewPostValueActionCreator } from "../../../redux/post-reducer";
import Posts from "./Posts";
import StoreContext from "../../MyContext";

const PostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let AddPost = () => {
          store.dispatch(AddPostActionCreater());
        };

        let newPostValue = (text) => {
          store.dispatch(NewPostValueActionCreator(text));
        };
        return <Posts onchanged={AddPost} newPostText={newPostValue} profilePage={state.posts.profilePage} />;
      }}
    </StoreContext.Consumer>
  );
};

export default PostsContainer;
