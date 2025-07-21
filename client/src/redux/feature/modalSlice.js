import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpen: false,
    isEdit: false,
    selectedSong: null
  },
  reducers: {
    openModal(state, action) {
      state.isModalOpen = true;
      state.isEdit = action.payload?.isEdit || false;
      state.selectedSong = action.payload?.song || null;
    },
    closeModal(state) {
      state.isModalOpen = false;
      state.isEdit = false;
      state.selectedSong = null;
    }
  }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
