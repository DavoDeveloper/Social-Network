import React from "react";
import DialogItem from "./Dialog";
import Message from "./Message";
import s from "./Dialogs.module.css";
// import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messageElements = props.messages.map((m) => <Message message={m.message} />);
  let messageValue = props.messageText;

  let MessageSendOnclick = () => {
    props.sendMessage();
  };

  let messageChangeValue = (e) => {
    let body = e.target.value;
    props.changeValue(body);
  };
  // if (!props.isAuth) {
  //   return <Navigate to={"/login/*"} />;
  // }
  return (
    <div className="container">
      <div className="row">
        <div className="col-2 dialogs">{dialogsElements}</div>
        <div className="col-10">
          {messageElements}
          <div className={s.send}>
            <textarea
              class="form-control"
              value={messageValue}
              onChange={messageChangeValue}
              id="exampleFormControlTextarea1"
              placeholder="Enter message..."
            ></textarea>
            <button onClick={MessageSendOnclick} className="btn btn-outline-dark">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
