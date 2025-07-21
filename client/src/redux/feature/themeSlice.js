import { createSlice } from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from "../../styles/theme.js";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: false,
    currentTheme: lightTheme
  },
  reducers: {
    setToDark: (state) => {
      state.isDark = true;
      state.currentTheme = darkTheme;
    },
    setTolight: (state) => {
      state.isDark = false;
      state.currentTheme = lightTheme;
    }
  }
});

export const { setToDark, setTolight } = themeSlice.actions;
export default themeSlice.reducer;
