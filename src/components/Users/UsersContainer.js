import { connect } from "react-redux";
import { FollowAC, SetUsersAC, UnfollowAC, SetCurrentPageAC, SetTotalUsersCountAC } from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(FollowAC(userId));
    },
    unfollow: (userId) => {
      dispatch(UnfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(SetUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(SetCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (count) => {
      dispatch(SetTotalUsersCountAC(count));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
