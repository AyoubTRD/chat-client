import { combineReducers } from "redux";
import { SIGN_IN } from "../actions/types";

const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer
});
