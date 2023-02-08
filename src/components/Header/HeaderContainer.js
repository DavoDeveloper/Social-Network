import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUsersData } from "../../redux/auth-reducer";
import { APIController } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    APIController.AuthUsers().then((data) => {
      if (data.resultCode === 0) {
        this.props.setUsersData(data.data);
        this.props.isAuth = true;
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.auth,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { setUsersData })(HeaderContainer);
