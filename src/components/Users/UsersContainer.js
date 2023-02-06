import React from "react";
import axios from "axios";
import Users from "./Users";
import { connect } from "react-redux";
import { follow, SetUsers, unfollow, SetCurrentPage, SetTotalUsersCount, FetchingLoader } from "../../redux/users-reducer";

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.FetchingLoader(true);
    axios.get(`https://reqres.in/api/users?page=${this.props.currentPage}&per_page=${this.props.pageSize}`).then((response) => {
      this.props.FetchingLoader(false);
      this.props.SetUsers(response.data.data);
      this.props.SetTotalUsersCount(response.data.total);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.FetchingLoader(true);
    this.props.SetCurrentPage(pageNumber);
    axios.get(`https://reqres.in/api/users?page=${pageNumber}&per_page=${this.props.pageSize}`).then((response) => {
      this.props.FetchingLoader(false);
      this.props.SetUsers(response.data.data);
    });
  };

  render() {
    return <Users users={this.props.users} isFetching={this.props.isFetching} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} unfollow={this.props.unfollow} follow={this.props.follow} onPageChanged={this.onPageChanged} fetchloader={this.props.FetchingLoader} />;
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

const UsersContainer = connect(mapStateToProps, { follow, unfollow, SetUsers, SetCurrentPage, SetTotalUsersCount, FetchingLoader })(UsersComponent);

export default UsersContainer;
