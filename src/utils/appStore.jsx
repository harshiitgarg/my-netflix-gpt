import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";
import watchListSlice from "./watchListSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    gptSearch: gptSlice,
    config: configSlice,
    watchList: watchListSlice,
  },
});

export default appStore;
