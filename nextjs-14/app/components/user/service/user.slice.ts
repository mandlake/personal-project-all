import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./user.init";
import {
  deleteUserById,
  findAllUsers,
  findUserById,
  modifiedUserById,
} from "./user.service";

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
      })
      .addCase(modifiedUserById.fulfilled, (state: any, { payload }: any) => {
        console.log("modified");
        state.array = payload;
      })
      .addCase(deleteUserById.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      });
  },
});

export const getAllUsers = (state: any) => state.user.array;
export const getUserById = (state: any) => state.user.array;
export const getModifiedUserById = (state: any) => state.user.array;
export const getDeleteUserById = (state: any) => state.user.array;

export const {} = userSlice.actions;

export default userSlice.reducer;
