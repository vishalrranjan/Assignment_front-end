import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const [loginResponse, setLoginResponse] = useState(false);

  const handleInput = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;

    let loginData = {
      ...loginInfo,
      [inputName]: inputValue,
    };
    console.log(loginData);
    setLoginInfo(loginData);
  };

  const handleSubit = () => {
    const url = "https://forwardapi.auctionsoftware.com/mobileapi/login";
    const headers = {
      key: "Content-Type",
      value: "multipart/form-data",
      enabled: true,
    };
    axios
      .post(url, loginInfo, {
        headers: headers,
      })
      .then((res) => setLoginResponse(res.data))
      .then((err) => {
        alert(err);
      });
    console.log(loginInfo);
  };

  useEffect(() => {
    console.log({ loginResponse });
    loginResponse && window.location.replace("/welcome");
  }, [loginResponse]);

  return (
    <div className="">
      <div className="">
        <h1>Patrick Conboy</h1>
        <h3 className="">LOGIN</h3>
        <p>
          Aloha, welcome to Hawai Action Services Continue logging into your
          account.
        </p>
        <div className="">
          <label htmlFor="emailid">Email Address</label>
          <input
            id="emailid"
            name="username"
            type="email"
            value={loginInfo.username}
            onChange={handleInput}
            placeholder="Enter your email address"
            autoComplete="off"
          />
        </div>
        <div className="">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={loginInfo.password}
            onChange={handleInput}
            placeholder="Enter your password"
          />
        </div>
        <div className="">
          <button className="" onClick={handleSubit}>
            Log-In
          </button>
          <div className="">
            <p className="">Don't have an account?</p>
            <Link to="/register">
              <button className="">Register here</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
