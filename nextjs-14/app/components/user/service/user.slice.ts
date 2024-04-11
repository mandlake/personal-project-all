import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./user.init";
import {
  deleteUser,
  findAllUsers,
  findUserById,
  modifiedUser,
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
      .addCase(modifiedUser.fulfilled, (state: any, { payload }: any) => {
        console.log("modified");
        state.array = payload;
      })
      .addCase(deleteUser.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      });
  },
});

export const getAllUsers = (state: any) => state.user.array;
export const getUserById = (state: any) => state.user.array;
export const getModifiedUser = (state: any) => state.user.array;
export const getDeleteUser = (state: any) => state.user.array;

export const {} = userSlice.actions;

export default userSlice.reducer;
