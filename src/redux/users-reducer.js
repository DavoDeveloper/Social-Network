let initialState = {
  users: [
    // { id: 1, name: "Simon", condition: "I am Boss", followed: true, location: { city: "Moscow", country: "Russsia" }, img: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-face_171337-2887.jpg?w=360" },
    // { id: 2, name: "Jack", condition: "I am Boss too", followed: false, location: { city: "Berlin", country: "Germany" }, img: "https://img.freepik.com/free-photo/red-haired-serious-young-man-blogger-looks-confidently_273609-16730.jpg?w=360" },
    // { id: 3, name: "John", condition: "I am Boss too", followed: false, location: { city: "Paris", country: "France" }, img: "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};

export const FollowAC = (userId) => ({ type: "FOLLOW", userId });
export const UnfollowAC = (userId) => ({ type: "UNFOLLOW", userId });
export const SetUsersAC = (users) => ({ type: "SET_USERS", users });

export default usersReducer;
