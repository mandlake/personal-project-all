import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllArticlesAPI } from "./article.api";

export const fetchAllArticles: any = createAsyncThunk(
  "article-feature/fetchAllArticles",
  async (page: number) => {
    console.log("getArticles page : " + page);
    const data: any = await getAllArticlesAPI(1);
    return data;
  }
);
