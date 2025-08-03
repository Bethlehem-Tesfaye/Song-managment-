import { call, fork, put, takeLatest } from "redux-saga/effects";
import {
  registerUserRequest,
  registerUserSuccess,
  registerUserFailure,
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailure
} from "./feature/authSLice.js";
import {
  loginUserApi,
  registerUserApi,
  logoutApi,
  forgotPasswordApi,
  resetPasswordApi
} from "./api.js";
import { clearSongs } from "./feature/songsSLice.js";

function* handleRegisterUser({ payload }) {
  try {
    const newUser = payload;
    const response = yield call(registerUserApi, newUser);
    const { userData } = response.data;
    yield put(registerUserSuccess({ userData }));
  } catch (error) {
    yield put(registerUserFailure(error.message || "Failed to register user"));
  }
}

function* handleLoginUser({ payload }) {
  try {
    const user = payload;
    const response = yield call(loginUserApi, user);
    const { userData } = response.data;
    yield put(loginUserSuccess({ userData }));
  } catch (error) {
    yield put(loginUserFailure(error.message || "Failed to register user"));
  }
}

function* handleLogout() {
  try {
    yield call(logoutApi);
    yield put(logoutSuccess());
    yield put(clearSongs());
  } catch (error) {
    yield put(logoutFailure(error.message || "Logout failed"));
  }
}
function* handleForgotPassword({ payload }) {
  try {
    yield call(forgotPasswordApi, payload.email);
    yield put(forgotPasswordSuccess());
  } catch (error) {
    yield put(
      forgotPasswordFailure(error.response?.data?.message || "Reset failed")
    );
  }
}

function* handleResetPassword({ payload }) {
  try {
    yield call(resetPasswordApi, payload);
    yield put(resetPasswordSuccess());
  } catch (error) {
    yield put(
      resetPasswordFailure(error.response?.data?.message || "Reset failed")
    );
  }
}

function* registerUser() {
  yield takeLatest(registerUserRequest.type, handleRegisterUser);
}

function* loginUser() {
  yield takeLatest(loginUserRequest.type, handleLoginUser);
}
function* logoutSaga() {
  yield takeLatest(logoutRequest.type, handleLogout);
}
function* forgotPassword() {
  yield takeLatest(forgotPasswordRequest.type, handleForgotPassword);
}

function* resetPassword() {
  yield takeLatest(resetPasswordRequest.type, handleResetPassword);
}
export const authSagas = [
  fork(registerUser),
  fork(loginUser),
  fork(forgotPassword),
  fork(resetPassword),
  fork(logoutSaga)
];
