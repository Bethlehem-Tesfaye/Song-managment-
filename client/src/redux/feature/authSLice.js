import { createSlice } from "@reduxjs/toolkit";

const authSLice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
    isPasswordResetSuccess: false,
    isLoggedOut: false
  },
  reducers: {
    registerUserRequest(state) {
      state.isLoading = true;
      state.error = null;
      state.isLoggedOut = false;
    },
    registerUserSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload.userData;
      state.isLoggedOut = false;
    },
    registerUserFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.user = null;
      state.isLoggedOut = false;
    },
    loginUserRequest(state) {
      state.isLoading = true;
      state.error = null;
      state.isLoggedOut = false;
    },
    loginUserSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload.userData;
      state.isLoggedOut = false;
    },
    loginUserFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.user = null;
      state.isLoggedOut = false; // reset on login fail
    },
    logoutRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    logoutSuccess(state) {
      state.isLoading = false;
      state.user = null;
      state.error = null;
      state.isLoggedOut = true; // <--- set flag here
    },
    logoutFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.isLoggedOut = false;
    },
    forgotPasswordRequest(state) {
      state.isLoading = true;
      state.error = null;
    },

    forgotPasswordSuccess(state) {
      state.isLoading = false;
      state.error = null;
    },

    forgotPasswordFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    resetPasswordRequest: (state) => {
      state.isLoading = true;
      state.error = null;
      state.isPasswordResetSuccess = false; // Reset flag
    },
    resetPasswordSuccess: (state) => {
      state.isLoading = false;
      state.isPasswordResetSuccess = true; // Set flag
    },
    resetPasswordFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isPasswordResetSuccess = false;
    }
  }
});

export const {
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
} = authSLice.actions;
export default authSLice.reducer;
