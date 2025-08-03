import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./feature/songsSLice.js";
import modalReducer from "./feature/modalSlice.js";
import themeReducer from "./feature/themeSlice.js";
import authReducer from "./feature/authSLice.js";
import rootSaga from "./rootSaga.js";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    songs: songReducer,
    modal: modalReducer,
    theme: themeReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});
sagaMiddleware.run(rootSaga);

export default store;
