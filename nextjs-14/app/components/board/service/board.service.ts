import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllBoardsAPI, findBoardByIdAPI } from "./board.api";

export const findAllBoards: any = createAsyncThunk(
  "board/findAllBoards",
  async (page: number) => {
    console.log("findBoards page : " + page);
    const data: any = await findAllBoardsAPI(1);
    return data;
  }
);

export const findBoardById: any = createAsyncThunk(
  "articles/findArticleById",
  async (id: number) => {
    return await findBoardByIdAPI(id);
  }
);
