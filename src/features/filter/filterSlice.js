import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postCategory: window.location.pathname.substring(1).split("/")[1],
};

const postCategorySlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateCategory: (state, action) => {
      state.postCategory = action.payload;
    },
  },
});

export default postCategorySlice.reducer;
export const { updateCategory } = postCategorySlice.actions;
