"use client";

import UserRows from "@/app/components/users/model/UserColimn";
import UserColumns from "@/app/components/users/users.column";
import { fetchAllUsers } from "@/redux/features/user-feature/user.service";
import { getAllUsers } from "@/redux/features/user-feature/user.slice";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
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

  const columns = UserColumns({} as IUser);
  const rows = UserRows();

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen mt-10">
        <h1 className="font-semibold text-stone-600 text-[30px]">
          이용자 목록
        </h1>

        <Box sx={{ height: 400, width: "90%" }}>
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
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </>
  );
};

export default UserArticlesPages;
