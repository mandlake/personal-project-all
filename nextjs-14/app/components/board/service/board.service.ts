import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllBoardsAPI } from "./board.api";

export const findAllBoards: any = createAsyncThunk(
  "board/findAllBoards",
  async (page: number) => {
    console.log("getBoards page : " + page);
    const data: any = await findAllBoardsAPI(1);
    return data;
  }
);
