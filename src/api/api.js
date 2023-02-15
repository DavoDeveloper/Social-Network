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
    console.warn("Outdated mehod,please Use ProfileApiController object");
    return ProfileAPIController.GetProfile(profileId);
  },
};

export const ProfileAPIController = {
  GetProfile(profileId) {
    return instance.get(`profile/` + profileId).then((response) => {
      return response.data;
    });
  },
  GetStatus(profileId) {
    return instance.get(`profile/status/` + profileId).then((response) => {
      return response.data;
    });
  },
  UpdateStatus(status) {
    return instance.put(`profile/status/`, { status }).then((response) => {
      return response.data;
    });
  },
};

export const AuthAPIController = {
  AuthUsers() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  Login(email, password, rememberMe = false) {
    return instance.post("auth/login", { email, password, rememberMe }).then((response) => {
      return response.data;
    });
  },
  Logout() {
    return instance.delete("auth/login").then((response) => {
      return response.data;
    });
  },
};
