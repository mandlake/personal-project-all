import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsersAPI } from "./user.api";

export const fetchAllUsers: any = createAsyncThunk(
  "user-feature/fetchAllUsers",
  async (page: number) => {
    console.log("getUsers Page: " + page);
    const data: any = await getAllUsersAPI(1);
    return data;
  }
);
