import React from "react";
import Dialogs from "./Dialogs";
import { NewMessageCreator, UpdateNewMessageCreator } from "../../redux/message-reducer";
import StoreContext from "../MyContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let MessageSendOnclick = () => {
          store.dispatch(NewMessageCreator());
        };

        let messageChangeValue = (body) => {
          store.dispatch(UpdateNewMessageCreator(body));
        };

        return <Dialogs changeValue={messageChangeValue} sendMessage={MessageSendOnclick} dialogsPage={state.messages.dialogsPage} messageText={state.messages.newMessageText} />;
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
