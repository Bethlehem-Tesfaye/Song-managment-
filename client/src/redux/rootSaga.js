import { all } from "redux-saga/effects";
import { songSagas } from "./songsSaga.js";

export default function* rootSaga() {
  yield all(songSagas);
}
