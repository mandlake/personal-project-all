import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./article.init";
import { findAllArticles, findArticleById } from "./article.service";

const status = {
  pending: "pending",
  fulfilled: "fulfilled",
  rejected: "rejected",
};

export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findAllArticles.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      })
      .addCase(findArticleById.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      });
  },
});

export const getAllArticles = (state: any) => state.article.array;
export const getArticleById = (state: any) => state.article.array;

export const {} = articleSlice.actions;

export default articleSlice.reducer;
