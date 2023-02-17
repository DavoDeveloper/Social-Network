import Loader from "../../common/Loader/Loader";
import s from "./Profile.module.css";
import avatar from "../../img/avatar.png";
// import Status from "./Status";
import StatusWithHooks from "./StatusWithHooks";

let ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
  }
  let logo = props.profile.photos.small;
  return (
    <div>
      {/* <img
        src="https://i.pinimg.com/originals/bd/27/a6/bd27a624efead1f76cf41c0256572c55.jpg"
        alt=""
      /> */}
      <div className={s.info}>
        {logo ? (
          <div className={s.avatar} style={{ backgroundImage: `url("${logo}")` }}></div>
        ) : (
          <div className={s.avatar} style={{ backgroundImage: `url("${avatar}")` }}></div>
        )}

        <div>
          <h3>{props.profile.fullName}</h3>
          <div>Date of birth:2 January</div>
          <div>City:Minsk</div>
          <div>Education:BSU</div>
          <div>Email:{props.profile.email}</div>
          <StatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
