import { createStore } from "redux";
import reducer from "./reducers";
// import thunk from "redux-thunk";

const store = createStore(reducer);

export default store;
