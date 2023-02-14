import React from "react";
import DialogItem from "./Dialog";
import Message from "./Message";
import s from "./Dialogs.module.css";
import { Field, reduxForm } from "redux-form";

const AddDialogForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.send}>
        <Field
          name={"messageBody"}
          component={"textarea"}
          class="form-control"
          placeholder="Enter message..."
        ></Field>
        <button className="btn btn-outline-dark">Send</button>
      </div>
    </form>
  );
};

const ReduxMessageForm = reduxForm({ form: "dialog" })(AddDialogForm);

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messageElements = props.messages.map((m) => <Message message={m.message} />);

  let addNewMessage = (value) => {
    props.sendMessage(value.messageBody);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2 dialogs">{dialogsElements}</div>
        <div className="col-10">
          {messageElements}
          <ReduxMessageForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
