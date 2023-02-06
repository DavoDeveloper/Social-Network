const NEW_POST = "NEW_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const ADD_PROFILE = "ADD_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Hi!,how are you", like: 50 },
    { id: 2, message: "Its my first post", like: 35 },
  ],
  newPostText: "",
  profile: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 3, message: state.newPostText, like: 0 }],
        newPostText: "",
      };

    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case ADD_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

export const AddPostActionCreater = () => ({ type: NEW_POST });
export const NewPostValueActionCreator = (text) => ({ type: UPDATE_POST_TEXT, newText: text });
export const AddProfile = (profile) => ({ type: ADD_PROFILE, profile });

export default postReducer;
