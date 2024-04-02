import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./article.init";
import { fetchAllArticles } from "./article.service";

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
      .addCase(fetchAllArticles.fulfilled, handleFulfilled)
      .addCase(fetchAllArticles.pending, handlePending)
      .addCase(fetchAllArticles.rejected, handleRejected);
  },
});

export const getAllArticles = (state: any) => {
  return state.article.array.result;
};

export const {} = articleSlice.actions;

export default articleSlice.reducer;
