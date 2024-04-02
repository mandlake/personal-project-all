"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { API } from "@/redux/common/enums/API";
import AxiosConfig from "@/redux/common/configs/axios-config";
import { PG } from "@/redux/common/enums/PG";
import { NextPage } from "next";

const useInput = (i: any) => {
  const [value, setValue] = useState("");
  const onChange = (e: any) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return { value, onChange };
};

const JoinPage: NextPage = () => {
  const router = useRouter();
  const id = useInput("");
  const pw = useInput("");
  const name = useInput("");
  const phone = useInput("");
  const address = useInput("");
  const job = useInput("");
  const height = useInput("");
  const weight = useInput("");

  const url = `${API.SERVER}/api/join`;
  const data = {
    id: id.value,
    pw: pw.value,
    name: name.value,
    phone: phone.value,
    address: address.value,
    job: job.value,
    height: height.value,
    weight: weight.value,
  };

  const handleCheckboxChange = () => {};

  const handleCancle = () => {
    alert("취소되었습니다.");
  };

  const handleSubmit = () => {
    alert(id.value);
    axios
      .post(url, data, AxiosConfig())
      .then((res) => {
        alert(JSON.stringify(res.data["message"]));
        router.push(`${PG.USER}/login`);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <>
      <div className="container">
        <h1>Sign up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label htmlFor="username">
          <b>Id</b>
        </label>
        <input
          type="text"
          placeholder="Enter Id"
          name="username"
          onChange={id.onChange}
          required
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          onChange={pw.onChange}
          required
        />

        <label htmlFor="name">
          <b>Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          onChange={name.onChange}
          required
        />

        <label htmlFor="phone">
          <b>Phone</b>
        </label>
        <input
          type="phone"
          placeholder="Enter Phone"
          name="phone"
          onChange={phone.onChange}
          required
        />

        <label htmlFor="address">
          <b>Address</b>
        </label>
        <input
          type="text"
          placeholder="Enter Address"
          name="address"
          onChange={address.onChange}
          required
        />

        <label htmlFor="job">
          <b>Job</b>
        </label>
        <input
          type="text"
          placeholder="Enter Job"
          name="job"
          onChange={job.onChange}
          required
        />

        <label htmlFor="height">
          <b>Height</b>
        </label>
        <input
          type="number"
          placeholder="Enter Height"
          name="height"
          onChange={height.onChange}
          required
        />

        <label htmlFor="weight">
          <b>Weight</b>
        </label>
        <input
          type="number"
          placeholder="Enter Weight"
          name="weight"
          onChange={weight.onChange}
          required
        />

        <label>
          <input
            type="checkbox"
            checked={true}
            name="remember"
            onChange={handleCheckboxChange}
            style={{ marginBottom: "15px" }}
          />
          Remember me
        </label>

        <p>
          By creating an account you agree to our{" "}
          <a href="#" style={{ color: "dodgerblue" }}>
            Terms & Privacy
          </a>
          .
        </p>

        <div className="clearfix">
          <button type="button" className="cancelbtn" onClick={handleCancle}>
            Cancel
          </button>
          <button
            type="submit"
            className="signupbtn bg-green-500"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default JoinPage;
