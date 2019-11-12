import {
  SIGN_IN,
  SIGN_OUT,
  ADD_USERS,
  ONLINE_USER,
  OFFLINE_USER,
  CHANGE_CHATROOM
} from "./types";

import { socket } from "../socket";

export const signIn = (user, token) => {
  return {
    type: SIGN_IN,
    payload: {
      user,
      token
    }
  };
};

export const addUsers = users => {
  return { type: ADD_USERS, payload: users };
};

export const onlineUser = user => {
  return {
    type: ONLINE_USER,
    payload: user
  };
};

export const offlineUser = user => {
  return {
    type: OFFLINE_USER,
    payload: user
  };
};

export const changeChatroom = user => {
  socket.emit("request messages", user._id);
  return {
    type: CHANGE_CHATROOM,
    payload: user
  };
};

export const signOut = () => {
  localStorage.removeItem("user");
  socket.disconnect();
  return {
    type: SIGN_OUT
  };
};
