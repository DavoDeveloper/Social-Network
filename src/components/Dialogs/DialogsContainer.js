import React from "react";
import Dialogs from "./Dialogs";

import { NewMessageCreator, UpdateNewMessageCreator } from "../../redux/message-reducer";

const DialogsContainer = (props) => {
<<<<<<< HEAD
  let state = props.store.getState();
  let MessageSendOnclick = () => {
    props.store.dispatch(NewMessageCreator());
  };

  let messageChangeValue = (body) => {
    props.store.dispatch(UpdateNewMessageCreator(body));
  };
  return <Dialogs changeValue={messageChangeValue} sendMessage={MessageSendOnclick} dialogsPage={state.messages.dialogsPage} messageText={state.messages.newMessageText} />;
=======
  let MessageSendOnclick = () => {
    props.dispatch(NewMessageCreator());
  };

  let messageChangeValue = (body) => {
    props.dispatch(UpdateNewMessageCreator(body));
  };
  return <Dialogs changeValue={messageChangeValue} sendMessage={MessageSendOnclick} dialogsPage={props.state.messages.dialogsPage} />;
>>>>>>> bfbbd7e799d9bfde6f34eb73da2500f287546437
};

export default DialogsContainer;
