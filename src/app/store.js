import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    filter: filterReducer,
  },
});
