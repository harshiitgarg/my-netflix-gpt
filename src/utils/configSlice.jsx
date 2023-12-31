import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    language: "en",
  },
  reducers: {
    setLang: (state, action) => {
      state.language = action.payload;
    },
    resetLang: (state, action) => {
      state.language = "en";
    }
  },
});
export default configSlice.reducer;
export const { setLang, resetLang } = configSlice.actions;
