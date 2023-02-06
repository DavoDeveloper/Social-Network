import { AddPostActionCreater, NewPostValueActionCreator } from "../../../redux/post-reducer";
import Posts from "./Posts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onchanged: () => {
      dispatch(AddPostActionCreater());
    },
    newPostText: (text) => {
      dispatch(NewPostValueActionCreator(text));
    },
  };
};
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
