import React from "react";
import Dialogs from "./Dialogs";

import { NewMessageCreator, UpdateNewMessageCreator } from "../../redux/message-reducer";

const DialogsContainer = (props) => {
  let state = props.store.getState();
  let MessageSendOnclick = () => {
    props.store.dispatch(NewMessageCreator());
  };

  let messageChangeValue = (body) => {
    props.store.dispatch(UpdateNewMessageCreator(body));
  };
  return <Dialogs changeValue={messageChangeValue} sendMessage={MessageSendOnclick} dialogsPage={state.messages.dialogsPage} messageText={state.messages.newMessageText} />;
};

export default DialogsContainer;
