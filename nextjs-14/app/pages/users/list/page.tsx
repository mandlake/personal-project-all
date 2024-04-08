"use client";

import UserColumns from "@/app/components/users/users.column";
import UserRows from "@/app/components/users/users.rows";
import { fetchAllUsers } from "@/redux/features/user-feature/user.service";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const UserArticlesPages: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers(1));
  }, []);

  const columns = UserColumns({} as UserColumns);
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
