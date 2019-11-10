import { createStore } from "redux";
import reducer from "./reducers";
// import thunk from "redux-thunk";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
