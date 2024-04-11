import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllArticlesAPI, findArticleByIdAPI } from "./article.api";

export const findAllArticles: any = createAsyncThunk(
  "article/findAllArticles",
  async (page: number) => {
    console.log("findArticles page : " + page);
    const data: any = await findAllArticlesAPI(1);
    return data;
  }
);

export const findArticleById: any = createAsyncThunk(
  "article/findArticleById",
  async (id: number) => {
    return await findArticleByIdAPI(id);
  }
);