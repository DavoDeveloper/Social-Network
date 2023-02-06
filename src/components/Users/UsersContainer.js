import React from "react";
import axios from "axios";
import Users from "./Users";
import { connect } from "react-redux";
import { FollowAC, SetUsersAC, UnfollowAC, SetCurrentPageAC, SetTotalUsersCountAC, FetchingLoaderAC } from "../../redux/users-reducer";

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.fetchingLoader(this.props.isFetching);
    axios.get(`https://reqres.in/api/users?page=${this.props.currentPage}&per_page=${this.props.pageSize}`).then((response) => {
      this.props.fetchingLoader(!this.props.isFetching);
      this.props.setUsers(response.data.data);
      this.props.setTotalUsersCount(response.data.total);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.fetchingLoader(this.props.isFetching);
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://reqres.in/api/users?page=${pageNumber}&per_page=${this.props.pageSize}`).then((response) => this.props.setUsers(response.data.data));
    this.props.fetchingLoader(!this.props.isFetching);
  };

  render() {
    return <Users users={this.props.users} isFetching={this.props.isFetching} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} unfollow={this.props.unfollow} follow={this.props.follow} onPageChanged={this.onPageChanged} fetchloader={this.props.fetchingLoader} />;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
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
    fetchingLoader: (isFetching) => {
      dispatch(FetchingLoaderAC(isFetching));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);

export default UsersContainer;
