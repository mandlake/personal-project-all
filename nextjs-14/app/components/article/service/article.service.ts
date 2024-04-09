import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllArticlesAPI } from "./article.api";

export const findAllArticles: any = createAsyncThunk(
  "article/findAllArticles",
  async (page: number) => {
    console.log("findArticles page : " + page);
    const data: any = await findAllArticlesAPI(1);
    return data;
  }
);
