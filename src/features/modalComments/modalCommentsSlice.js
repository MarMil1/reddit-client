import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  comments: [],
  error: "",
};

export const fetchComments = createAsyncThunk(
  "comment/fetchComments",
  async (permalink) => {
    const response = await axios.get(`https://www.reddit.com${permalink}.json`);
    // console.log(response.data[1].data.children, "<<<<< Response from COMMENTS");
    return response.data[1].data.children.map((comment) => comment.data);
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.loading = false;
      state.comments = action.payload;
      state.error = "";
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.loading = false;
      state.comments = [];
      state.error = action.error.message;
    });
  },
});

export default commentSlice.reducer;
