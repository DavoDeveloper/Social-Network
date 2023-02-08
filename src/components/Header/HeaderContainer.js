import React from "react";
import axios from "axios";
import Header from "./Header";
import { connect } from "react-redux";
import { setUsersData } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then((response) => {
      if (response.data.resultCode === 0) {
        this.props.setUsersData(response.data.data);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { setUsersData })(HeaderContainer);
