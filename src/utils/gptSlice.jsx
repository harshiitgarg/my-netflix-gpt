import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showgptSearch: false,
  },
  reducers: {
    toggleShowgptSearch: (state, action) => {
      state.showgptSearch = !state.showgptSearch;
    },
    removeShowgptSearch: (state, action) => {
      state.showgptSearch = false;
    },
  },
});

export default gptSlice.reducer;
export const { toggleShowgptSearch, removeShowgptSearch } = gptSlice.actions;
