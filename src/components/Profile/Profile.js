import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <img src="https://i.pinimg.com/originals/bd/27/a6/bd27a624efead1f76cf41c0256572c55.jpg" alt="" />
      <div className={s.info}>
        <img src="https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels.png" alt="" />
        <div>
          <h3>Robert P.</h3>
          <div>Date of birth:2 January</div>
          <div>City:Minsk</div>
          <div>Education:BSU</div>
          <div>Web Site:https//:example.com</div>
        </div>
      </div>

      <Posts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
