import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./user.init";
import { findAllUsers, findUserById } from "./user.service";
import { findBoardById } from "../../board/service/board.service";

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

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findAllUsers.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      })
      .addCase(findUserById.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      });
  },
});

export const getAllUsers = (state: any) => state.user.array;
export const getUserById = (state: any) => state.user.array;

export const {} = userSlice.actions;

export default userSlice.reducer;
