import { all } from "redux-saga/effects";
import { songSagas } from "./songsSaga.js";
import { authSagas } from "./authSaga.js";
import { statsSaga } from "./statSaga.js";

export default function* rootSaga() {
  yield all([...songSagas, ...authSagas, ...statsSaga]);
}
