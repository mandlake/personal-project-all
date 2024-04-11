import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteUserAPI,
  findAllUsersAPI,
  findUserByIdAPI,
  modifiedUserAPI,
} from "./user.api";

export const findAllUsers: any = createAsyncThunk(
  "user/findAllUsers",
  async (page: number) => {
    console.log("fetchAllUsers Page: " + page);
    const data: any = await findAllUsersAPI(1);
    return data;
  }
);

export const findUserById: any = createAsyncThunk(
  "user/findUserById",
  async (id: number) => {
    return await findUserByIdAPI(id);
  }
);

export const modifiedUser: any = createAsyncThunk(
  "user/modifiedUser",
  async (all: IUser) => {
    return await modifiedUserAPI(all);
  }
);

export const deleteUser: any = createAsyncThunk(
  "user/deleteUser",
  async (id: number) => {
    return await deleteUserAPI(id);
  }
);
