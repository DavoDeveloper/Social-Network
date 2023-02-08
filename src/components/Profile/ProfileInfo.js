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
        <div className={s.avatar} style={{ backgroundImage: `url("${props.profile.photo}")` }}></div>
        <div>
          <h3>{props.profile.name}</h3>
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
