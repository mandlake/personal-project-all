"use client";

import { fetchAllUsers } from "@/redux/features/user-feature/user.service";
import { getAllUsers } from "@/redux/features/user-feature/user.slice";
import { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserArticlesPages: NextPage = () => {
  const dispatch = useDispatch();
  const allUsers: [] = useSelector(getAllUsers);

  if (allUsers !== undefined) {
    console.log("allUsers is defined");
    console.log(allUsers);
  } else {
    console.log("allUsers is undefined");
  }

  useEffect(() => {
    dispatch(fetchAllUsers(1));
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen mt-10">
        <h1 className="font-semibold text-stone-600 text-[30px]">
          이용자 목록
        </h1>

        <table className="border-stone-800 border-2">
          <thead className="text-stone-700">
            <tr>
              <th>아이디</th>
              <th>비밀번호</th>
              <th>이름</th>
              <th>전화번호</th>
              <th>주소</th>
              <th>직업</th>
              <th>키</th>
              <th>몸무게</th>
            </tr>
          </thead>
          <tbody className="text-stone-600">
            {allUsers?.map((props: IUser) => (
              <tr key={props.id}>
                <td>{props.username}</td>
                <td>{props.password}</td>
                <td>{props.name}</td>
                <td>{props.phone_number}</td>
                <td>{props.address}</td>
                <td>{props.job}</td>
                <td>{props.height}</td>
                <td>{props.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserArticlesPages;
