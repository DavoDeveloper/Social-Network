import React from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../common/Loader/Loader";
import s from "./Users.module.css";
import avatar from "../../img/avatar.png";
import Pagination from "../../common/Pagination/Pagination";

let Users = (props) => {
  return (
    <>
      {<Pagination currentPage={props.currentPage} onPageChanged={props.onPageChanged} />}

      {props.isFetching ? <Loader /> : null}
      <div>
        {props.users.map((items) => (
          <div className={s.userBlock}>
            <div className={s.userImg}>
              <NavLink to={"/profile/" + items.id}>
                <div
                  style={{
                    backgroundImage: `url('${items.photos.small ? items.photos.small : avatar}')`,
                  }}
                ></div>
              </NavLink>
              {items.followed ? (
                <button
                  disabled={props.folowingProgress.some((id) => id === items.id)}
                  onClick={() => {
                    props.unfollowSuccess(items.id);
                  }}
                  className="btn btn-dark mt-3 mb-3"
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.folowingProgress.some((id) => id === items.id)}
                  onClick={() => {
                    props.followSuccess(items.id);
                  }}
                  className="btn btn-info mt-3 mb-3"
                >
                  Follow
                </button>
              )}
            </div>
            <div className={s.personalInfo}>
              <div>
                <div className={s.name}>{items.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
