import messageReducer from "./message-reducer";
import postReducer from "./post-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi!,how are you", like: 50 },
        { id: 2, message: "Its my first post", like: 35 },
      ],
      newPostText: "",
    },
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
    sidebar: {
      // friends: [
      //   { name: "Simon", imgUrl: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-face_171337-2887.jpg?w=360" },
      //   { name: "Jack", imgUrl: "https://img.freepik.com/free-photo/red-haired-serious-young-man-blogger-looks-confidently_273609-16730.jpg?w=360" },
      //   { name: "John", imgUrl: "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" },
      //   { name: "Angel", imgUrl: "https://media.istockphoto.com/id/1080369442/photo/portrait-of-young-girl-with-blond-fashion-hairstyle.jpg?s=612x612&w=0&k=20&c=m0-xMMIBwpaIdayGrgCGcg4b1XsZaAWerN9QTw0VdTI=" },
      //   { name: "Ann", imgUrl: "https://media.istockphoto.com/id/1322686195/photo/beautiful-looking-young-blonde-woman-with-the-middle-length-hair-wearing-in-a-delicate-makeup.jpg?s=612x612&w=0&k=20&c=uZPx0H1C4ZNpz42-SziHL6vxImoO6Cjaeqt29R8r-9k=" },
      //   { name: "Smith", imgUrl: "https://st2.depositphotos.com/3143277/8644/i/600/depositphotos_86446164-stock-photo-business-man-in-office.jpg" },
      // ],
    },
  },
  getState() {
    return this._state;
  },
  rerenderEntireTree() {
    console.log("State changed");
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },

  dispatch(action) {
    this._state.profilePage = postReducer(this._state.profilePage, action);
    this._state.dialogsPage = messageReducer(this._state.dialogsPage, action);
    this.rerenderEntireTree(this._state);
  },
};

export default store;
