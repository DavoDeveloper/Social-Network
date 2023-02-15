import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { checkisAuth } from "../../redux/auth-reducer";
import { logout } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.checkisAuth(this.props.isAuth);
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

export default connect(mapStateToProps, { checkisAuth, logout })(HeaderContainer);
