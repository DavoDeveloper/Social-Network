import { APIController } from "../api/api";
import { updateObjectInArray } from "./object-reducer";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const FETCHING_LOADER = "FETCHING_LOADER";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [],
  currentPage: 1,
  pageSize: 20,
  totalUsersCount: null,
  isFetching: false,
  folowingProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case FETCHING_LOADER:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        folowingProgress: action.isFetching
          ? [...state.folowingProgress, action.id]
          : state.folowingProgress.filter((id) => id !== action.id),
      };

    default:
      return state;
  }
};

export const follow = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollow = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const SetUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const SetCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const SetTotalUsersCount = (count) => ({
  type: SET_TOTAL_USERS_COUNT,
  count,
});
export const FetchingLoader = (isFetching) => ({
  type: FETCHING_LOADER,
  isFetching,
});
export const FollowingInProgress = (isFetching, id) => ({
  type: FOLLOWING_IN_PROGRESS,
  isFetching,
  id,
});

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(FetchingLoader(true));
  let data = await APIController.GetUsers(currentPage, pageSize);
  dispatch(FetchingLoader(false));
  dispatch(SetUsers(data.items));
  dispatch(SetTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (dispatch, id, APIMethod, actionCreator) => {
  dispatch(FollowingInProgress(true, id));
  let data = await APIMethod(id);
  if (data.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(FollowingInProgress(false, id));
};

export const followSuccess = (id) => async (dispatch) => {
  followUnfollowFlow(dispatch, id, APIController.FollowUser.bind(APIController), follow);
};

export const unfollowSuccess = (id) => async (dispatch) => {
  followUnfollowFlow(dispatch, id, APIController.UnFollowUser.bind(APIController), unfollow);
};

export default usersReducer;
