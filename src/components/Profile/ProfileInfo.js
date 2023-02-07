import Loader from "../../common/Loader/Loader";
import s from "./Profile.module.css";

let ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
  }
  return (
    <div>
      <img src="https://i.pinimg.com/originals/bd/27/a6/bd27a624efead1f76cf41c0256572c55.jpg" alt="" />
      <div className={s.info}>
        <div className={s.avatar} style={{ backgroundImage: `url("${props.profile.avatar}")` }}></div>
        {/* <img src="https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels.png" alt="" /> */}
        <div>
          <h3>{props.profile.first_name}</h3>
          <h4>{props.profile.last_name}</h4>
          <div>Date of birth:2 January</div>
          <div>City:Minsk</div>
          <div>Education:BSU</div>
          <div>Email:{props.profile.email}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
