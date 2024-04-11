"use client";

import { findArticleById } from "@/app/components/article/service/article.service";
import { getArticleById } from "@/app/components/article/service/article.slice";
import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const IdPage = (props: any) => {
  const dispatch = useDispatch();
  const article = useSelector(getArticleById);

  useEffect(() => {
    dispatch(findArticleById(props.params.id));
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen mt-10">
        <h1>{props.params.id}번 페이지입니다.</h1>

        <div className="flex gap-2 justify-center items-center">
          <span>ID :</span>
          <Typography textAlign="center" sx={{ fontSize: "3rm" }}>
            {article.id}
          </Typography>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>게시판 제목 :</span>
          <Typography textAlign="center" sx={{ fontSize: "3rm" }}>
            {article.title}
          </Typography>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>게시판 내용 :</span>
          <Typography textAlign="center" sx={{ fontSize: "3rm" }}>
            {article.content}
          </Typography>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>등록일 :</span>
          <Typography textAlign="center" sx={{ fontSize: "3rm" }}>
            {article.registerDate}
          </Typography>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>수정일 :</span>
          <Typography textAlign="center" sx={{ fontSize: "3rm" }}>
            {article.modDate}
          </Typography>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <Button>수정하기</Button>
          <Button>삭제하기</Button>
        </div>
      </div>
    </>
  );
};

export default IdPage;
