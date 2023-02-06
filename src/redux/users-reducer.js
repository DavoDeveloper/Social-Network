const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const FETCHING_LOADER = "FETCHING_LOADER";

let initialState = {
  users: [],
  currentPage: 1,
  pageSize: 6,
  totalUsersCount: 0,
  isFetching: true,
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
        isFetching: action.fetch,
      };

    default:
      return state;
  }
};

export const FollowAC = (userId) => ({ type: FOLLOW, userId });
export const UnfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const SetUsersAC = (users) => ({ type: SET_USERS, users });
export const SetCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const SetTotalUsersCountAC = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
export const FetchingLoaderAC = (isFetching) => ({ type: FETCHING_LOADER, isFetching });

export default usersReducer;
