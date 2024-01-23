import { createStore, compose } from "redux";
import { userReducer } from "./reducers/reducerConnection";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(userReducer, composeEnhancers());

export type RootState = ReturnType<typeof store.getState>;
