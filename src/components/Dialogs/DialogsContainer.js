import React from "react";
import Dialogs from "./Dialogs";

import { NewMessageCreator, UpdateNewMessageCreator } from "../../redux/message-reducer";

const DialogsContainer = (props) => {
  let MessageSendOnclick = () => {
    props.dispatch(NewMessageCreator());
  };

  let messageChangeValue = (body) => {
    props.dispatch(UpdateNewMessageCreator(body));
  };
  return <Dialogs changeValue={messageChangeValue} sendMessage={MessageSendOnclick} dialogsPage={props.state.messages.dialogsPage} />;
};

export default DialogsContainer;
