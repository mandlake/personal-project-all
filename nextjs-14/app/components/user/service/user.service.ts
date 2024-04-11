import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllUsersAPI, findUserByIdAPI } from "./user.api";

export const findAllUsers: any = createAsyncThunk(
  "user/findAllUsers",
  async (page: number) => {
    console.log("fetchAllUsers Page: " + page);
    const data: any = await findAllUsersAPI(1);
    return data;
  }
);

export const findUserById: any = createAsyncThunk(
  "articles/findUserById",
  async (id: number) => {
    return await findUserByIdAPI(id);
  }
);
