import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

export const fetchHomePosts = createAsyncThunk(
  "homePost/fetchHomePosts",
  async () => {
    const response = await axios.get(`https://www.reddit.com/.json?limit=100`);
    // console.log(response.data.data.children, "<<<<< Response from HOME");
    console.log(response.request.responseURL, "REQUEST HOME");
    return response.data.data.children.map((homePost) => homePost.data);
  }
);

const homePostSlice = createSlice({
  name: "homePost",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchHomePosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHomePosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchHomePosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export default homePostSlice.reducer;
