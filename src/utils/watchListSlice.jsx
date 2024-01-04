import { createSlice } from "@reduxjs/toolkit";

const watchListSlice = createSlice({
  name: "watchList",
  initialState: {
    watchList: [],
  },
  reducers: {
    addToWatchList: (state, action) => {
      state.watchList.push(action.payload);
    },
    removeFromWatchList: (state, action) => {
        state.watchList = state.watchList.filter(item => item.id !== action.payload.id);
      }
  },
});

export default watchListSlice.reducer;
export const { addToWatchList, removeFromWatchList } = watchListSlice.actions;
