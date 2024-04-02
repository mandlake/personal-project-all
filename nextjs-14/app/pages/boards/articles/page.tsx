"use client";

import { useEffect } from "react";
import { NextPage } from "next";
import { fetchAllArticles } from "@/redux/features/article-feature/article.service";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "@/redux/features/article-feature/article.slice";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ArticleColumns from "@/app/components/articles.components/articles.columns";
import ArticleRows from "@/app/components/articles.components/articles.rows";

const ArticlesPage: NextPage = ({ data }: any) => {
  const dispatch = useDispatch();
  const allArticles: [] = useSelector(getAllArticles);

  if (allArticles !== undefined) {
    console.log("allArticles is defined");
    console.log(allArticles);
  } else {
    console.log("allArticles is undefined");
  }

  useEffect(() => {
    dispatch(fetchAllArticles(1));
  }, []);

  const columns = ArticleColumns({} as IArticle);
  const rows = ArticleRows();

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen mt-10">
        <h1 className="font-semibold text-stone-600 text-[30px]">
          게시글 목록
        </h1>

        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </>
  );
};

export default ArticlesPage;
