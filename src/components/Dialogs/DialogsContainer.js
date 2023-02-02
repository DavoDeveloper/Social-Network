import Dialogs from "./Dialogs";
import { NewMessageCreator, UpdateNewMessageCreator } from "../../redux/message-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  console.log(state);
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    messageText: state.dialogsPage.newMessageText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(NewMessageCreator());
    },
    changeValue: (body) => {
      dispatch(UpdateNewMessageCreator(body));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
