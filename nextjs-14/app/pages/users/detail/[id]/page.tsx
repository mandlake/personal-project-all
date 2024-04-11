"use client";

import {
  deleteUser,
  findUserById,
  modifiedUser,
} from "@/app/components/user/service/user.service";
import { getUserById } from "@/app/components/user/service/user.slice";
import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const IdPage = (props: any) => {
  const dispatch = useDispatch();
  const user = useSelector(getUserById);
  const [modified, setModified] = useState({
    id: user.id,
    username: user.username,
    password: user.password,
    name: user.name,
    phoneNumber: user.phoneNumber,
    address: user.address,
    job: user.job,
  });

  const onModified = () => {
    dispatch(
      modifiedUser({
        ...user,
        username: modified.username || user.username,
        password: modified.password || user.password,
        name: modified.name || user.name,
        phoneNumber: modified.phoneNumber || user.phoneNumber,
        address: modified.address || user.address,
        job: modified.job || user.job,
      })
    );
  };

  const onDeleted = () => {
    dispatch(deleteUser(props.params.id));
  };

  useEffect(() => {
    dispatch(findUserById(props.params.id));
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen mt-10">
        <h1 className="text-[20px]">{props.params.id}님의 개인 페이지</h1>
        <div className="flex gap-2 justify-between items-center">
          <span>ID :</span>
          <TextField
            defaultValue={user.id}
            variant="outlined"
            fullWidth
            onChange={(e: any) =>
              setModified({ ...modified, id: e.target.value })
            }
          />
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>아이디 :</span>
          <TextField
            defaultValue={user.username}
            variant="outlined"
            fullWidth
            onChange={(e: any) =>
              setModified({ ...modified, username: e.target.value })
            }
          />
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>비밀번호 :</span>
          <TextField
            defaultValue={user.password}
            variant="outlined"
            fullWidth
            onChange={(e: any) =>
              setModified({ ...modified, password: e.target.value })
            }
          />
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>name :</span>
          <TextField
            defaultValue={user.name}
            variant="outlined"
            fullWidth
            onChange={(e: any) =>
              setModified({ ...modified, name: e.target.value })
            }
          />
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>phoneNumber :</span>
          <TextField
            defaultValue={user.phoneNumber}
            variant="outlined"
            fullWidth
            onChange={(e: any) =>
              setModified({ ...modified, phoneNumber: e.target.value })
            }
          />
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>address :</span>
          <TextField
            defaultValue={user.address}
            variant="outlined"
            fullWidth
            onChange={(e: any) =>
              setModified({ ...modified, address: e.target.value })
            }
          />
        </div>

        <div className="flex gap-2 justify-center items-center">
          <span>job :</span>
          <TextField
            defaultValue={user.job}
            variant="outlined"
            fullWidth
            onChange={(e: any) =>
              setModified({ ...modified, job: e.target.value })
            }
          />
        </div>

        <div className="flex gap-2 justify-center items-center">
          <Button onClick={onModified}>수정하기</Button>
          <Button onClick={onDeleted}>삭제하기</Button>
        </div>
      </div>
    </>
  );
};

export default IdPage;
