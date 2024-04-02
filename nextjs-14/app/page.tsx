"use client";

import { useState } from "react";
import axios from "axios";
import { API } from "../redux/common/enums/API";
import AxiosConfig from "../redux/common/configs/axios-config";

const Home = () => {
  const [name, setName] = useState("");
  const url = `${API.SERVER}/name`;
  const data = { name: name };
  AxiosConfig;

  const handleChange = (e: any) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    alert(name + "님 안녕하세요.");
    axios.post(url, data, AxiosConfig()).then((res) => {
      alert(JSON.stringify(res.data) + "님의 계정이 존재합니다.");
    });
  };

  return (
    <>
      <div className="text-blue-400 flex flex-col justify-center items-center w-screen mt-10">
        <h1 className="font-semibold text-[28px]">
          Welcome To React World !!!
        </h1>
        <input className="bg-blue-200" type="type" onChange={handleChange} />
        <br />
        <button onClick={handleClick}>클릭</button>
      </div>
    </>
  );
};

export default Home;
