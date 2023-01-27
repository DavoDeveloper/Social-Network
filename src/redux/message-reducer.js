const messageReducer = (state, action) => {
  if (action.type === "NEW-MESSAGE") {
    let newMessage = {
      message: state.newMessageText,
      id: 4,
    };
    state.newMessageText = "";
    state.messages.push(newMessage);
  } else if (action.type === "UPDATE-MESSAGE-VALUE") {
    state.newMessageText = action.body;
  }
  return state;
};

export const NewMessageCreator = () => ({ type: "NEW-MESSAGE" });
export const UpdateNewMessageCreator = (body) => ({ type: "UPDATE-MESSAGE-VALUE", body: body });

export default messageReducer;
