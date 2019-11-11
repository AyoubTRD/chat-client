import { combineReducers } from "redux";
import {
  SIGN_IN,
  ONLINE_USER,
  OFFLINE_USER,
  GET_MESSAGES,
  ADD_USERS
} from "../actions/types";

const arrToObj = arr => {
  const obj = {};
  arr.forEach(el => {
    obj[el._id] = el;
  });
  return obj;
};

const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return payload;
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
    default:
      return state;
  }
};

const messagesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_MESSAGES:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  users: usersReducer,
  messages: messagesReducer
});
