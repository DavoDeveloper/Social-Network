import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  SetCurrentPage,
  FollowingInProgress,
  getUsers,
  followSuccess,
  unfollowSuccess,
} from "../../redux/users-reducer";

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.SetCurrentPage(pageNumber);
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  };

  render() {
    return (
      <Users
        users={this.props.users}
        isFetching={this.props.isFetching}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        folowingProgress={this.props.folowingProgress}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        onPageChanged={this.onPageChanged}
        fetchloader={this.props.FetchingLoader}
        FollowingInProgress={this.props.FollowingInProgress}
        followSuccess={this.props.followSuccess}
        unfollowSuccess={this.props.unfollowSuccess}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    folowingProgress: state.usersPage.folowingProgress,
  };
};

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  SetCurrentPage,
  FollowingInProgress,
  getUsers,
  followSuccess,
  unfollowSuccess,
})(UsersComponent);

export default UsersContainer;
