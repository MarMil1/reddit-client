import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";
import filterReducer from "../features/filter/filterSlice";
import commentReducer from "../features/modalComments/modalCommentsSlice";
import homePostReducer from "../features/nav/menuPicker/menuPickerSlice";
import popularPostReducer from "../features/nav/menuPicker/menuPickerPopularSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    filter: filterReducer,
    comment: commentReducer,
    homePost: homePostReducer,
    popularPost: popularPostReducer,
  },
});
