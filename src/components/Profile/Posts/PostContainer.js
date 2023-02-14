import { AddPostActionCreater } from "../../../redux/post-reducer";
import Posts from "./Posts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onchanged: (newPostBody) => {
      dispatch(AddPostActionCreater(newPostBody));
    },
  };
};
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
