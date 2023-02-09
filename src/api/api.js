import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "924e90c1-095c-40ed-981d-3a1909f95ef3",
  },
});

export const APIController = {
  GetUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
      return response.data;
    });
  },
  AuthUsers() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  FollowUser(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  UnFollowUser(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  GetProfile(profileId) {
    return instance.get(`profile/` + profileId).then((response) => {
      return response.data;
    });
  },
};
