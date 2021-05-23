import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

const { createStore, applyMiddleware, compose } = require("redux");

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devTools)
);

export default store;
