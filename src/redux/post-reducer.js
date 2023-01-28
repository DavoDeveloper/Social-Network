let initialState = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi!,how are you", like: 50 },
      { id: 2, message: "Its my first post", like: 35 },
    ],
    newPostText: "",
  },
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW-POST":
      let newPost = {
        id: 3,
        message: state.newPostText,
        like: 0,
      };
      state.profilePage.newPostText = "";
      state.profilePage.posts.push(newPost);
      return state;
    case "UPDATE-POST-TEXT":
      state.profilePage.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const AddPostActionCreater = () => ({ type: "NEW-POST" });
export const NewPostValueActionCreator = (text) => ({ type: "UPDATE-POST-TEXT", newText: text });

export default postReducer;
