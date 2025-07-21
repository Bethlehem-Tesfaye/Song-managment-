import { call, fork, put, takeLatest } from "redux-saga/effects";
import {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  createSongRequest,
  createSongSuccess,
  createSongFailure,
  updateSongRequest,
  updateSongSuccess,
  updateSongFailure,
  deleteSongRequest,
  deleteSongSuccess,
  deleteSongFailure
} from "./feature/songsSLice.js";

import {
  createSongApi,
  deleteSongApi,
  fetchSongsApi,
  updateSongApi
} from "./api.js";

function* handleFetchSongs({ payload }) {
  try {
    const page = payload;
    const songs = yield call(fetchSongsApi, page);
    yield put(
      fetchSongsSuccess({
        songs: songs.data.songs,
        page: songs.data.page,
        totalPage: songs.data.totalPage
      })
    );
  } catch (error) {
    yield put(
      fetchSongsFailure(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch songs"
      )
    );
  }
}
function* handleCreateSong({ payload }) {
  try {
    const newSong = payload;
    const songs = yield call(createSongApi, newSong);
    yield put(fetchSongsRequest(1));
  } catch (error) {
    yield put(
      createSongFailure(
        error.response?.data?.message ||
          error.message ||
          "Failed to create song"
      )
    );
  }
}

function* handleUpdateSong({ payload }) {
  try {
    const updatedSong = payload.updatedSong;
    const id = payload.id;
    const songs = yield call(updateSongApi, id, updatedSong);
    yield put(updateSongSuccess(songs.data.song));
  } catch (error) {
    yield put(
      updateSongFailure(
        error.response?.data?.message ||
          error.message ||
          "Failed to update songs"
      )
    );
  }
}

function* handleDeleteSong({ payload }) {
  try {
    yield call(deleteSongApi, payload);
    yield put(deleteSongSuccess(payload));

    const songs = yield select((state) => state.songs.songs);
    const currentPage = yield select((state) => state.songs.page);

    if (songs.length === 1 && currentPage > 0) {
      yield put(fetchSongsRequest(currentPage - 1));
    } else {
      yield put(fetchSongsRequest(currentPage));
    }
  } catch (error) {
    yield put(
      deleteSongFailure(
        error.response?.data?.message ||
          error.message ||
          "Failed to delete songs"
      )
    );
  }
}

function* fetchSongs() {
  yield takeLatest(fetchSongsRequest.type, handleFetchSongs);
}

function* createSong() {
  yield takeLatest(createSongRequest.type, handleCreateSong);
}

function* updateSong() {
  yield takeLatest(updateSongRequest.type, handleUpdateSong);
}

function* deleteSong() {
  yield takeLatest(deleteSongRequest.type, handleDeleteSong);
}

export const songSagas = [
  fork(fetchSongs),
  fork(createSong),
  fork(updateSong),
  fork(deleteSong)
];
