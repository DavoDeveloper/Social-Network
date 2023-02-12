import Dialogs from "./Dialogs";
import { NewMessageCreator, UpdateNewMessageCreator } from "../../redux/message-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../Hoc/withAuthContainer";

let mapStateToProps = (state) => {
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

let authRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent);

export default DialogsContainer;
