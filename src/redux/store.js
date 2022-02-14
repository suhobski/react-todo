import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const { createStore, applyMiddleware } = require("redux");
const { todosReducer } = require("./reducers/todosReducer");

export const store = createStore(
  todosReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
