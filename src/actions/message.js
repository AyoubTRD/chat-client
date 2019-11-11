import { GET_MESSAGES, ADD_MESSAGE } from "./types";

export const getMessages = msgs => {
  return { type: GET_MESSAGES, payload: msgs };
};

export const addMessage = msg => {
  return {
    type: ADD_MESSAGE,
    payload: msg
  };
};
