import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async (filterType) => {
    const response = await axios.get(
      `https://www.reddit.com/${filterType}?limit=100`
    );
    // console.log(response.data.data.children, "<<<<< Response POST SLICE");
    // console.log(response.request.responseURL, "REQUEST POST SLICE");
    return response.data.data.children.map((post) => post.data);
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
