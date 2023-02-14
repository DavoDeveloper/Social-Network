import Dialogs from "./Dialogs";
import { NewMessageCreator } from "../../redux/message-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../Hoc/withAuthContainer";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(NewMessageCreator(newMessageBody));
    },
  };
};

let authRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent);

export default DialogsContainer;
