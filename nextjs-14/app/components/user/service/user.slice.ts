import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./user.init";
import { findAllUsers } from "./user.service";

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
      .addCase(findAllUsers.fulfilled, handleFulfilled)
      .addCase(findAllUsers.pending, handlePending)
      .addCase(findAllUsers.rejected, handleRejected);
  },
});

export const getAllUsers = (state: any) => {
  return state.user.array;
};

export const {} = userSlice.actions;

export default userSlice.reducer;
