import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postCategory: `${window.location.pathname}.json`,
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
