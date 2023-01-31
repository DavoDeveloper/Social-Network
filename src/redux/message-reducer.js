let initialState = {
  dialogsPage: {
    dialogs: [
      { name: "Simon", id: 1 },
      { name: "Jack", id: 2 },
      { name: "John", id: 3 },
      { name: "Angel", id: 4 },
      { name: "Ann", id: 5 },
      { name: "Smith", id: 6 },
    ],
    messages: [
      { message: "Hi", id: 1 },
      { message: "How are you", id: 2 },
      { message: "Yo", id: 3 },
    ],
    newMessageText: "",
  },
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW-MESSAGE":
      let newMessage = {
        message: state.dialogsPage.newMessageText,
        id: 4,
      };
      state.dialogsPage.newMessageText = "";
      state.dialogsPage.messages.push(newMessage);
      return state;
    case "UPDATE-MESSAGE-VALUE":
      state.dialogsPage.newMessageText = action.body;
      return state;
    default:
      return state;
  }
};

export const NewMessageCreator = () => ({ type: "NEW-MESSAGE" });
export const UpdateNewMessageCreator = (body) => ({ type: "UPDATE-MESSAGE-VALUE", body: body });

export default messageReducer;
