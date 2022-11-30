import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";
import filterReducer from "../features/filter/filterSlice";
import commentReducer from "../features/modalComments/modalCommentsSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    filter: filterReducer,
    comment: commentReducer,
  },
});
