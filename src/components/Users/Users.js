import React from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../common/Loader/Loader";
import s from "./Users.module.css";
import avatar from "../../img/avatar.png";
import { APIController } from "../../api/api";

let Users = (props) => {
  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pagesCount = 10;
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const styles = (src) => ({
    backgroundImage: `url('${src.photos.small ? src.photos.small : avatar}')`,
  });
  return (
    <>
      <div className={s.pagination}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.active}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.isFetching ? <Loader /> : null}
      <div>
        {props.users.map((items) => (
          <div className={s.userBlock}>
            <div className={s.userImg}>
              <NavLink to={"/profile/" + items.id}>
                <div style={styles(items)}></div>
              </NavLink>
              {items.followed ? (
                <button
                  onClick={() => {
                    APIController.UnFollowUser(items.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.unfollow(items.id);
                      }
                    });
                  }}
                  className="btn btn-dark mt-3 mb-3"
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    APIController.FollowUser(items.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.follow(items.id);
                      }
                    });
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
