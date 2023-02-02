let initialState = {
  posts: [
    { id: 1, message: "Hi!,how are you", like: 50 },
    { id: 2, message: "Its my first post", like: 35 },
  ],
  newPostText: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW-POST":
      return {
        ...state,
        posts: [...state.posts, { id: 3, message: state.newPostText, like: 0 }],
        newPostText: "",
      };

    case "UPDATE-POST-TEXT":
      return {
        ...state,
        newPostText: action.newText,
      };
    default:
      return state;
  }
};

export const AddPostActionCreater = () => ({ type: "NEW-POST" });
export const NewPostValueActionCreator = (text) => ({ type: "UPDATE-POST-TEXT", newText: text });

export default postReducer;
