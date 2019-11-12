import { combineReducers } from "redux";
import {
  SIGN_IN,
  SIGN_OUT,
  ONLINE_USER,
  OFFLINE_USER,
  GET_MESSAGES,
  ADD_MESSAGE,
  ADD_USERS,
  CHANGE_CHATROOM
} from "../actions/types";
import { compareAsc } from "date-fns";

const arrToObj = arr => {
  const obj = {};
  arr.forEach(el => {
    obj[el._id] = el;
  });
  return obj;
};

const formatMessages = msgs => {
  let messages = [];
  msgs.received.forEach(msg => {
    msg.createdAt = new Date(msg.createdAt);

    messages.push({ ...msg, own: false });
  });
  try {
    msgs.sent.forEach(msg => {
      msg.createdAt = new Date(msg.createdAt);
      messages.push({ ...msg, own: true });
    });

    messages = messages.sort((a, b) => compareAsc(a.createdAt, b.createdAt));
  } catch (e) {
    console.log(e);
  }

  return messages;
};

const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return payload;
    case SIGN_OUT:
      return {};
    default:
      return state;
  }
};

const usersReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_USERS:
      return arrToObj(payload);
    case ONLINE_USER:
      return { ...state, [payload._id]: payload };
    case OFFLINE_USER:
      return { ...state, [payload._id]: payload };
    case SIGN_OUT:
      return {};
    default:
      return state;
  }
};

const messagesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_MESSAGES:
      return formatMessages(payload);
    case ADD_MESSAGE:
      return [...state, payload];
    case SIGN_OUT:
      return [];
    default:
      return state;
  }
};

const chatroomReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case CHANGE_CHATROOM:
      return payload;
    case OFFLINE_USER:
      if (payload._id === state._id) {
        return payload;
      }
      return state;
    case SIGN_OUT:
      return {};
    case ONLINE_USER:
      if (payload._id === state._id) {
        return payload;
      }
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  users: usersReducer,
  messages: messagesReducer,
  chatroomUser: chatroomReducer
});
