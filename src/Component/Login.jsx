import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg from "../Assets/bg.png";
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

  const bgImg = {
    "background-image": `url(${bg})`,
    "background-color": "#fff",
    height: "100vh",
    "background-position": "center",
    " background-repeat": "no-repeat",
    "background-size": "cover",
    display: "flex",
    "align-items": "center",
    "justify-content": "content",
  };
  const formWrap = {
    "background-color": "rgba(255, 255, 255, 0.9)",
    "border-radius": "10px",
    height: "90vh",
    margin: "auto",
    display: "flex",
    "align-items": "center",
    "justify-content": "content",
    "flex-direction": "column",
    padding: "30px",
  };

  return (
    <div style={bgImg}>
      <div className="LoginFormWrap" style={formWrap}>
        <h1
          style={{ color: "#00A8CC", fontSize: "40px", "font-weight": "400" }}
        >
          Patrick Conboy
        </h1>
        <h3
          style={{
            color: "#000",
            fontSize: "20px",
            "font-weight": "400",
            letterSpacing: "2px",
            marginTop: "10px",
          }}
        >
          LOGIN
        </h3>
        <p
          style={{
            color: "#000",
            fontSize: "14px",
            "font-weight": "400",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          Aloha, welcome to Hawai Action Services <br />
          Continue logging into your account.
        </p>
        <div style={{ width: "100%", marginTop: "20px" }}>
          <label
            style={{ display: "block", fontSize: "14px", fontWeight: "500" }}
            htmlFor="emailid"
          >
            Email Address
          </label>
          <input
            id="emailid"
            name="username"
            type="email"
            value={loginInfo.username}
            onChange={handleInput}
            placeholder="Enter your email address"
            autoComplete="off"
            style={{
              outline: "none",
              width: "100%",
              boxSizing: "border-box",
              padding: "12px 10px",
              marginBottom: "15px",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "1px solid #303030",
            }}
          />
        </div>
        <div style={{ width: "100%" }}>
          <label
            style={{ display: "block", fontSize: "14px", fontWeight: "500" }}
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={loginInfo.password}
            onChange={handleInput}
            placeholder="Enter your password"
            style={{
              outline: "none",
              width: "100%",
              boxSizing: "border-box",
              padding: "12px 10px",
              marginBottom: "15px",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "1px solid #303030",
            }}
          />
        </div>
        <div style={{ width: "100%", marginTop: "30px" }}>
          <button
            style={{
              borderRadius: "5px",
              padding: "10px",
              outline: "none",
              border: "none",
              backgroundColor: "#142850",
              color: "#fff",
              width: "100%",
            }}
            onClick={handleSubit}
          >
            Log-In
          </button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            <p
              style={{
                fontWeight: "500",
                fontSize: "13px",
                marginBottom: "15px",
              }}
            >
              Don't have an account?
            </p>
            <Link
              to="/register"
              style={{
                fontSize: "14px",
                textDecoration: "none",
                color: "#000",
                fontWeight: "500",
              }}
            >
              Register <span style={{ color: "#00A8CC" }}>here</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
