import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllUsersAPI } from "./user.api";

export const findAllUsers: any = createAsyncThunk(
  "user/findAllUsers",
  async (page: number) => {
    console.log("fetchAllUsers Page: " + page);
    const data: any = await findAllUsersAPI(1);
    return data;
  }
);
