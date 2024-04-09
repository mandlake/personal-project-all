import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./article.init";
import { findAllArticles } from "./article.service";

const status = {
  pending: "pending",
  fulfilled: "fulfilled",
  rejected: "rejected",
};

const handleFulfilled = (state: any, { payload }: any) => {
  state.array = payload;
  console.log(status.fulfilled);
};

const handlePending = (state: any) => {
  console.log(status.pending);
};

const handleRejected = (state: any) => {
  console.log(status.rejected);
};

export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findAllArticles.fulfilled, handleFulfilled)
      .addCase(findAllArticles.pending, handlePending)
      .addCase(findAllArticles.rejected, handleRejected);
  },
});

export const getAllArticles = (state: any) => {
  return state.article.array;
};

export const {} = articleSlice.actions;

export default articleSlice.reducer;
