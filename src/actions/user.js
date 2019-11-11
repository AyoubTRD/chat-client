import { SIGN_IN, ADD_USERS, ONLINE_USER, OFFLINE_USER } from "./types";

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
