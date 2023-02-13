import React from "react";
import s from "./Profile.module.css";
import PostsContainer from "./Posts/PostContainer";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <PostsContainer />
    </div>
  );
};

export default Profile;
