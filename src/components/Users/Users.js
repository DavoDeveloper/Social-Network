import axios from "axios";
import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    //   props.setusers([
    //     { id: 1, name: "Simon", condition: "I am Boss", followed: true, location: { city: "Moscow", country: "Russsia" }, img: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-face_171337-2887.jpg?w=360" },
    //     { id: 2, name: "Jack", condition: "I am Boss too", followed: false, location: { city: "Berlin", country: "Germany" }, img: "https://img.freepik.com/free-photo/red-haired-serious-young-man-blogger-looks-confidently_273609-16730.jpg?w=360" },
    //     { id: 3, name: "John", condition: "I am Boss too", followed: false, location: { city: "Paris", country: "France" }, img: "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" },
    //   ]);
    axios.get("https://reqres.in/api/users?page=2").then((response) => props.setUsers([response.data.data]));
  }
  let newUsers;
  props.users.map((u) => {
    newUsers = u.map((items) => {
      console.log(items);
      let styles = {
        backgroundImage: `url('${items.avatar}')`,
      };
      return (
        <div className={s.userBlock}>
          <div className={s.userImg}>
            <div style={styles}></div>
            {u.followed ? (
              <button onClick={() => props.unfollow(u.id)} className="btn btn-info mt-3 mb-3">
                Unfollow
              </button>
            ) : (
              <button onClick={() => props.follow(u.id)} className="btn btn-info mt-3 mb-3">
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
            <div>{items.email}</div>
          </div>
        </div>
      );
    });
  });
  return <div className="row">{newUsers}</div>;
};

export default Users;
