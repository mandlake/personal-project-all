import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./user.init";
import { fetchAllUsers } from "./user.service";

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
      .addCase(fetchAllUsers.fulfilled, handleFulfilled)
      .addCase(fetchAllUsers.pending, handlePending)
      .addCase(fetchAllUsers.rejected, handleRejected);
  },
});

export const getAllUsers = (state: any) => {
  return state.user.array.result;
};

export const {} = userSlice.actions;

export default userSlice.reducer;
