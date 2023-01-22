import React from "react";
import DialogItem from "./Dialog";
import Message from "./Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messageElements = props.messages.map((m) => <Message message={m.message} />);
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
