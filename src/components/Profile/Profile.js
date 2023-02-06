import React from "react";
import s from "./Profile.module.css";
import PostsContainer from "./Posts/PostContainer";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  console.log(props);
  return (
    <div className={s.profile}>
      <ProfileInfo profile={props.profile} />
      <PostsContainer />
    </div>
  );
};

export default Profile;
