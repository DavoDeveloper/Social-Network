import { connect } from "react-redux";
import { FollowAC, UnfollowAC } from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
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
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
