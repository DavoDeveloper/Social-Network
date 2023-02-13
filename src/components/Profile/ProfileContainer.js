import React from "react";
import Profile from "./Profile";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getProfile, getStatus, updateStatus } from "../../redux/post-reducer";
import { withAuthRedirect } from "../Hoc/withAuthContainer";
import { compose } from "redux";

class ProfileComponent extends React.Component {
  componentDidMount() {
    let profileId = this.props.router.params.userId;
    if (!profileId) {
      profileId = 27826;
    }
    this.props.getProfile(profileId);
    this.props.getStatus(profileId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};

function withRouter(ProfileComponent) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <ProfileComponent {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}
export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileComponent);
