"use client";

import { findBoardById } from "@/app/components/board/service/board.service";
import { getBoardById } from "@/app/components/board/service/board.slice";
import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const IdPage = (props: any) => {
  const dispatch = useDispatch();
  const board = useSelector(getBoardById);

  useEffect(() => {
    dispatch(findBoardById(props.params.id));
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen mt-10">
        <div className="flex gap-2 justify-center items-center">
          <span>ID :</span>
          <Typography textAlign="center" sx={{ fontSize: "3rm" }}>
            {board.id}
          </Typography>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>게시판 이름 :</span>
          <Typography textAlign="center" sx={{ fontSize: "3rm" }}>
            {board.boardName}
          </Typography>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>게시판 타입 :</span>
          <Typography textAlign="center" sx={{ fontSize: "3rm" }}>
            {board.boardType}
          </Typography>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>등록일 :</span>
          <Typography textAlign="center" sx={{ fontSize: "3rm" }}>
            {board.registerDate}
          </Typography>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>수정일 :</span>
          <Typography textAlign="center" sx={{ fontSize: "3rm" }}>
            {board.modDate}
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
