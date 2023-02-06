import React from "react";
import axios from "axios";
import Profile from "./Profile";
import { connect } from "react-redux";
import { AddProfile } from "../../redux/post-reducer";

class ProfileComponent extends React.Component {
  componentDidMount() {
    console.log(this.props);
    axios.get(`https://reqres.in/api/users/1`).then((response) => {
      this.props.AddProfile(response.data.data);
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    profile: state.profilePage.profile,
  };
};

const ProfileContainer = connect(mapStateToProps, { AddProfile })(ProfileComponent);

export default ProfileContainer;
