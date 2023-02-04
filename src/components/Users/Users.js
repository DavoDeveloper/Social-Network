import axios from "axios";
import React from "react";
import s from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    axios.get("https://reqres.in/api/users?page=2").then((response) => this.props.setUsers(response.data.data));
  }

  render() {
    const styles = (src) => ({
      backgroundImage: `url('${src.avatar}')`,
    });
    return (
      <div>
        {this.props.users.map((items) => (
          <div className={s.userBlock}>
            <div className={s.userImg}>
              <div style={styles(items)}></div>
              {items.followed ? (
                <button onClick={() => this.props.unfollow(items.id)} className="btn btn-dark mt-3 mb-3">
                  Unfollow
                </button>
              ) : (
                <button onClick={() => this.props.follow(items.id)} className="btn btn-info mt-3 mb-3">
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
        ))}
      </div>
    );
  }
}

export default Users;
