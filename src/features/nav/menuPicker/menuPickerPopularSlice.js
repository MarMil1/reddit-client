import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

export const fetchPopularPosts = createAsyncThunk(
  "popularPost/fetchPopularPosts",
  async () => {
    const response = await axios.get(
      `https://www.reddit.com/r/popular.json?limit=100`
    );
    // console.log(response.data.data.children, "<<<<< Response from POPULAR");
    console.log(response.request.responseURL, "REQUEST POPULAR");
    return response.data.data.children.map((popularPost) => popularPost.data);
  }
);

const popularPostSlice = createSlice({
  name: "popularPost",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPopularPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPopularPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPopularPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export default popularPostSlice.reducer;
