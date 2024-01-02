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
  },
});

export default gptSlice.reducer;
export const { toggleShowgptSearch } = gptSlice.actions;