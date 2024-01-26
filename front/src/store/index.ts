import { createStore, compose } from "redux";
import { userReducer } from "./reducers/reducerConnection";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = createStore(persistedReducer, composeEnhancers());

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
