import { createSlice } from "@reduxjs/toolkit";

export const songsSLice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
    isLoading: false,
    error: null,
    page: 1,
    totalPage: null
  },
  reducers: {
    fetchSongsRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchSongsSuccess: (state, action) => {
      state.isLoading = false;
      state.songs = action.payload.songs;
      state.page = action.payload.page;
      state.totalPage = action.payload.totalPage;
      state.error = null;
    },
    fetchSongsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    createSongRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    createSongSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
    createSongFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateSongRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    updateSongSuccess: (state, action) => {
      state.isLoading = false;
      const updatedSong = action.payload;
      const index = state.songs.findIndex((s) => s._id === updatedSong._id);
      if (index !== -1) {
        state.songs[index] = updatedSong;
      }
      state.error = null;
    },
    updateSongFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteSongRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    deleteSongSuccess: (state, action) => {
      state.isLoading = false;
      const id = action.payload;
      state.songs = state.songs.filter((song) => song._id !== id);
      state.error = null;
    },
    deleteSongFailure: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
    clearSongs: (state) => {
      state.songs = [];
      state.page = 1;
      state.totalPage = null;
      state.isLoading = false;
      state.error = null;
    }
  }
});

export const {
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
  deleteSongFailure,
  clearSongs
} = songsSLice.actions;

export default songsSLice.reducer;
