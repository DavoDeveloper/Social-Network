const postReducer = (state, action) => {
  if (action.type === "NEW-POST") {
    let newPost = {
      id: 3,
      message: state.newPostText,
      like: 0,
    };
    state.newPostText = "";
    state.posts.push(newPost);
  } else if (action.type === "UPDATE-POST-TEXT") {
    state.newPostText = action.newText;
  }
  return state;
};

export const AddPostActionCreater = () => ({ type: "NEW-POST" });
export const NewPostValueActionCreator = (text) => ({ type: "UPDATE-POST-TEXT", newText: text });

export default postReducer;
