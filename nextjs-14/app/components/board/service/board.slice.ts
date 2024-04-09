import { createSlice } from "@reduxjs/toolkit";
import { findAllBoards } from "./board.service";
import { initialState } from "./board.init";

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

export const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findAllBoards.fulfilled, handleFulfilled)
      .addCase(findAllBoards.pending, handlePending)
      .addCase(findAllBoards.rejected, handleRejected);
  },
});

export const getAllArticles = (state: any) => {
  return state.article.array.result;
};

export const {} = boardSlice.actions;

export default boardSlice.reducer;
