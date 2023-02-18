import { APIController, ProfileAPIController } from "../api/api";

const NEW_POST = "NEW_POST";
const ADD_PROFILE = "ADD_PROFILE";
const GET_STATUS = "GET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi!,how are you", like: 50 },
    { id: 2, message: "Its my first post", like: 35 },
  ],
  profile: null,
  status: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 3, message: action.newPostBody, like: 0 }],
      };

    case ADD_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case GET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const AddPostActionCreater = (newPostBody) => ({ type: NEW_POST, newPostBody });
export const AddProfile = (profile) => ({ type: ADD_PROFILE, profile });
export const AddStatus = (status) => ({ type: GET_STATUS, status });

export const getProfile = (profileId) => async (dispatch) => {
  let data = await APIController.GetProfile(profileId);
  dispatch(AddProfile(data));
};

export const getStatus = (profileId) => async (dispatch) => {
  let data = await ProfileAPIController.GetStatus(profileId);
  dispatch(AddStatus(data));
};

export const updateStatus = (status) => async (dispatch) => {
  let data = await ProfileAPIController.UpdateStatus(status);
  if (data.resultCode === 0) {
    dispatch(AddStatus(status));
  }
};

export default postReducer;
