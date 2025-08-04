import { createSlice } from "@reduxjs/toolkit";

export const statSlice = createSlice({
  name: "stat",
  initialState: {
    totalSongs: null,
    songsPerGenre: null,
    topGenres: null,
    isLoading: false,
    error: null
  },
  reducers: {
    fetchUserSongStatRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchUserSongStatSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.topGenres = action.payload.topGenres;
      state.songsPerGenre = action.payload.songsPerGenre;
      state.totalSongs = action.payload.totalSongs;
    },
    fetchUserSongStatFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.topGenres = null;
      state.songsPerGenre = null;
      state.totalSongs = null;
    }
  }
});

export const {
  fetchUserSongStatRequest,
  fetchUserSongStatSuccess,
  fetchUserSongStatFailure
} = statSlice.actions;

export default statSlice.reducer;
