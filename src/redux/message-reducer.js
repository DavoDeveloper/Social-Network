let initialState = {
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
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW-MESSAGE":
      return {
        ...state,
        messages: [...state.messages, { message: action.newMessageBody, id: 4 }],
      };

    default:
      return state;
  }
};

export const NewMessageCreator = (newMessageBody) => ({ type: "NEW-MESSAGE", newMessageBody });

export default messageReducer;
