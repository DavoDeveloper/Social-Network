import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  let newUsers = props.users.map((u) => {
    let styles = {
      backgroundImage: `url('${u.img}')`,
    };
    return (
      <div className={s.userBlock}>
        <div className={s.userImg}>
          <div style={styles}></div>
          {u.follwed ? (
            <button onClick={() => props.follow(u.id)} className="btn btn-info mt-3 mb-3">
              Unfollow
            </button>
          ) : (
            <button onClick={() => props.unfollow(u.id)} className="btn btn-info mt-3 mb-3">
              Follow
            </button>
          )}
        </div>
        <div className={s.personalInfo}>
          <div>
            <div className={s.name}>{u.name}</div>
            <div className={s.condition}>'{u.condition}'</div>
          </div>
        </div>
        <div>
          <div>{u.location.country}</div>
          <div>{u.location.city}</div>
        </div>
      </div>
    );
  });
  return <div className="row">{newUsers}</div>;
};

export default Users;
