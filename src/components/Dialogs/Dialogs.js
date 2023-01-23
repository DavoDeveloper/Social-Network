import React from "react";
import DialogItem from "./Dialog";
import Message from "./Message";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messageElements = props.messages.map((m) => <Message message={m.message} />);

  return (
    <div className="container">
      <div className="row">
        <div className="col-2 dialogs">{dialogsElements}</div>
        <div className="col-10">
          {messageElements}
          <div className={s.send}>
            <textarea class="form-control" id="exampleFormControlTextarea1"></textarea>
            <button className="btn btn-outline-dark">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
