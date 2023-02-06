import React from "react";
import s from "./Users.module.css";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const styles = (src) => ({
    backgroundImage: `url('${src.avatar}')`,
  });

  return (
    <>
      {props.isFetching ? <div className={s["lds-dual-ring"]}></div> : null}
      <div>
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
        {props.users.map((items) => (
          <div className={s.userBlock}>
            <div className={s.userImg}>
              <div style={styles(items)}></div>
              {items.followed ? (
                <button onClick={() => props.unfollow(items.id)} className="btn btn-dark mt-3 mb-3">
                  Unfollow
                </button>
              ) : (
                <button onClick={() => props.follow(items.id)} className="btn btn-info mt-3 mb-3">
                  Follow
                </button>
              )}
            </div>
            <div className={s.personalInfo}>
              <div>
                <div className={s.name}>{items.first_name}</div>
                <div className={s.condition}>{items.last_name}</div>
              </div>
            </div>
            <div className={s.email}>
              <div style={{ textAlign: "start" }}>{items.email}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
