import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { follow, SetUsers, unfollow, SetCurrentPage, SetTotalUsersCount, FetchingLoader } from "../../redux/users-reducer";
import { GetUsers } from "../../api/api";

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.FetchingLoader(true);
    GetUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.FetchingLoader(false);
      this.props.SetUsers(data.items);
      this.props.SetTotalUsersCount(data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.FetchingLoader(true);
    this.props.SetCurrentPage(pageNumber);
    GetUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.FetchingLoader(false);
      this.props.SetUsers(data.items);
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
