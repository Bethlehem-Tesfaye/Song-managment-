import { call, fork, put, takeLatest } from "redux-saga/effects";
import {
  fetchUserSongStatRequest,
  fetchUserSongStatSuccess,
  fetchUserSongStatFailure
} from "./feature/statSlice.js";
import { statsApi } from "./api.js";

function* handleFetchStat({ payload }) {
  try {
    const res = yield call(statsApi);

    yield put(
      fetchUserSongStatSuccess({
        totalSongs: res.data.data.totalSongs,
        songsPerGenre: res.data.data.songsPerGenre,
        topGenres: res.data.data.topGenres
      })
    );
  } catch (error) {
    yield put(fetchUserSongStatFailure("no stat"));
  }
}

function* fecthUserSongStat() {
  yield takeLatest(fetchUserSongStatRequest, handleFetchStat);
}

export const statsSaga = [fork(fecthUserSongStat)];
