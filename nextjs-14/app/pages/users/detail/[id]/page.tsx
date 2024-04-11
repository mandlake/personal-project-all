"use client";

import { findUserById } from "@/app/components/user/service/user.service";
import { getUserById } from "@/app/components/user/service/user.slice";
import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const IdPage = (props: any) => {
  const dispatch = useDispatch();
  const user = useSelector(getUserById);

  useEffect(() => {
    dispatch(findUserById(props.params.id));
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen mt-10">
        <h1 className="text-[20px]">{props.params.id}님의 개인 페이지</h1>
        <div className="flex gap-2 justify-between items-center">
          <span>ID :</span>
          <Typography textAlign="center" sx={{ fontSize: "3rm" }}>
            {user.id}
          </Typography>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>아이디 :</span>
          <Typography textAlign="center" sx={{ fontSize: "3rm" }}>
            {user.username}
          </Typography>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>비밀번호 :</span>
          <Typography textAlign="center" sx={{ fontSize: "3rm" }}>
            {user.password}
          </Typography>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>name :</span>
          <Typography textAlign="center" sx={{ fontSize: "3rm" }}>
            {user.name}
          </Typography>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>phoneNumber :</span>
          <Typography textAlign="center" sx={{ fontSize: "3rm" }}>
            {user.phoneNumber}
          </Typography>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>address :</span>
          <Typography textAlign="center" sx={{ fontSize: "3rm" }}>
            {user.address}
          </Typography>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>job :</span>
          <Typography textAlign="center" sx={{ fontSize: "3rm" }}>
            {user.job}
          </Typography>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>registerDate :</span>
          <Typography textAlign="center" sx={{ fontSize: "3rm" }}>
            {user.registerDate}
          </Typography>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>modDate :</span>
          <Typography textAlign="center" sx={{ fontSize: "3rm" }}>
            {user.modDate}
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
