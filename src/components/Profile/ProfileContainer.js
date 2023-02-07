import React from "react";
import axios from "axios";
import Profile from "./Profile";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { AddProfile } from "../../redux/post-reducer";

class ProfileComponent extends React.Component {
  componentDidMount() {
    let profileId = this.props.router.params.userId;
    if (!profileId) {
      profileId = 10;
    }
    axios.get(`https://reqres.in/api/users/` + profileId).then((response) => {
      this.props.AddProfile(response.data.data);
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
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
export default connect(mapStateToProps, { AddProfile })(withRouter(ProfileComponent));
