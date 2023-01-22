import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <NavLink to={path} className={s.dialog + " " + s.active}>
      {props.name}
    </NavLink>
  );
};

const Message = (props) => {
  return <div>{props.message}</div>;
};

let dialogs = [
  { name: "Simon", id: 1 },
  { name: "Jack", id: 2 },
  { name: "John", id: 3 },
  { name: "Angel", id: 4 },
  { name: "Ann", id: 5 },
  { name: "Smith", id: 6 },
];

let messages = [
  { message: "Hi", id: 1 },
  { message: "How are you", id: 2 },
  { message: "Yo", id: 3 },
];

let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);

let messageElements = messages.map((m) => <Message message={m.message} />);

const Dialogs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2 dialogs">{dialogsElements}</div>
        <div className="col-10">{messageElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
