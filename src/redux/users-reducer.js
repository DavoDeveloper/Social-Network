import { APIController } from "../api/api";

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
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
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

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(FetchingLoader(true));
    APIController.GetUsers(currentPage, pageSize).then((data) => {
      dispatch(FetchingLoader(false));
      dispatch(SetUsers(data.items));
      dispatch(SetTotalUsersCount(data.totalCount));
    });
  };
};

export const followSuccess = (id) => {
  return (dispatch) => {
    dispatch(FollowingInProgress(true, id));
    APIController.FollowUser(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(follow(id));
      }
      dispatch(FollowingInProgress(false, id));
    });
  };
};

export const unfollowSuccess = (id) => {
  return (dispatch) => {
    dispatch(FollowingInProgress(true, id));
    APIController.UnFollowUser(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollow(id));
      }
      dispatch(FollowingInProgress(false, id));
    });
  };
};

export default usersReducer;
