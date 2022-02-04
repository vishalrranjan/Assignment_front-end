import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg from "../Assets/bg.png";

const Register = () => {
  const [userInfo, setUserInso] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    email: "",
    phone: "",
    password: "",
    country: "",
    state: "",
    city: "",
    address1: "",
    zip: "",
  });

  const [registerResponse, setRegisterResponse] = useState();

  const handleInput = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;

    let userData = {
      ...userInfo,
      [inputName]: inputValue,
    };
    console.log(userData);
    setUserInso(userData);
  };

  const handleSubit = () => {
    const url = "https://forwardapi.auctionsoftware.com/mobileapi/register";
    const headers = {
      key: "Content-Type",
      // value: "multipart/form-data",
      enabled: true,
    };
    axios
      .post(url, userInfo, { headers })
      .then((res) => setRegisterResponse(res))
      .then((err) => {
        alert(err);
      });
    console.log(userInfo, headers);
  };

  useEffect(() => {
    console.log({ registerResponse });
    registerResponse && window.location.replace("/welcome");
  }, [registerResponse]);
  const bgImg = {
    "background-image": `url(${bg})`,
    "background-color": "#fff",
    'min-height': "100vh",
    "background-position": "center",
    " background-repeat": "no-repeat",
    "background-size": "cover",
     "background-attachment": 'fixed',
    display: "flex",
    "align-items": "center",
    "justify-content": "content",
    "flex-direction": "column",
  };
  const formWrap = {
    "background-color": "rgba(255, 255, 255, 0.9)",
    "border-radius": "10px",
    
    margin: "30px auto",
    display: "flex",
    "align-items": "center",
    "justify-content": "content",
    "flex-direction": "column",
    padding: "30px",
  };
  return (
    <div style={bgImg}>
      <div className="RegisterFormWrap" style={formWrap}>
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
          REGISTRATION
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
        <div className="FormInputCstWrap" style={{'width' : '100%'}}>
          <div style={{ width: "100%", marginTop: "20px" }}>
            <label
              style={{ display: "block", fontSize: "14px", fontWeight: "500" }}
              htmlFor="firstname"
            >
              First Name
            </label>
            <input
              id="firstname"
              name="first_name"
              type="text"
              value={userInfo.first_name}
              onChange={handleInput}
              placeholder="Enter your first name"
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
          <div style={{ width: "100%", marginTop: "20px" }}>
            <label
              style={{ display: "block", fontSize: "14px", fontWeight: "500" }}
              htmlFor="lastname"
            >
              Last Name
            </label>
            <input
              id="lastname"
              name="last_name"
              type="text"
              value={userInfo.last_name}
              onChange={handleInput}
              placeholder="Enter your last name"
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
          <div style={{ width: "100%", marginTop: "20px" }}>
            <label
              style={{ display: "block", fontSize: "14px", fontWeight: "500" }}
              htmlFor="business-name"
            >
              Business Name
            </label>
            <input
              id="business-name"
              name="company_name"
              type="text"
              value={userInfo.company_name}
              onChange={handleInput}
              placeholder="Enter your last name"
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
          <div style={{ width: "100%", marginTop: "20px" }}>
            <label
              style={{ display: "block", fontSize: "14px", fontWeight: "500" }}
              htmlFor="emailid"
            >
              Email Address
            </label>
            <input
              id="emailid"
              name="email"
              type="email"
              value={userInfo.email}
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
          <div style={{ width: "100%", marginTop: "20px" }}>
            <label
              style={{ display: "block", fontSize: "14px", fontWeight: "500" }}
              htmlFor="phone-no"
            >
              Phone Number
            </label>
            <input
              id="phone-no"
              name="phone"
              type="number"
              value={userInfo.phone}
              onChange={handleInput}
              placeholder="Enter your phone number"
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
          <div style={{ width: "100%", marginTop: "20px" }}>
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
              value={userInfo.password}
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
          <div style={{ width: "100%", marginTop: "20px" }}>
            <label
              style={{ display: "block", fontSize: "14px", fontWeight: "500" }}
              htmlFor="country"
            >
              Country
            </label>
            <input
              id="country"
              name="country"
              type="text"
              value={userInfo.country}
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
          <div style={{ width: "100%", marginTop: "20px" }}>
            <label
              style={{ display: "block", fontSize: "14px", fontWeight: "500" }}
              htmlFor="state"
            >
              State
            </label>
            <input
              id="state"
              name="state"
              type="text"
              value={userInfo.state}
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
          <div style={{ width: "100%", marginTop: "20px" }}>
            <label
              style={{ display: "block", fontSize: "14px", fontWeight: "500" }}
              htmlFor="city"
            >
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              value={userInfo.city}
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
          <div style={{ width: "100%", marginTop: "20px" }}>
            <label
              style={{ display: "block", fontSize: "14px", fontWeight: "500" }}
              htmlFor="address"
            >
              Address
            </label>
            <input
              id="address"
              name="address1"
              type="text"
              value={userInfo.address1}
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
          <div style={{ width: "100%", marginTop: "20px" }}>
            <label
              style={{ display: "block", fontSize: "14px", fontWeight: "500" }}
              htmlFor="zip"
            >
              Zip Code
            </label>
            <input
              id="zip"
              name="zip"
              type="number"
              value={userInfo.zip}
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
        </div>
          <div  style={{ marginTop: "30px", 'display': 'flex', 'alignItems': 'column', 'flexDirection': 'column', 'justifyContent': 'center' }}>
            <button  style={{
              borderRadius: "5px",
              padding: "14px 30px",
              outline: "none",
              border: "none",
              backgroundColor: "#142850",
              color: "#fff",
            }} onClick={handleSubit}>
              SUBMIT
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
              Already have an account ?
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
              Login <span style={{ color: "#00A8CC" }}>here</span>
            </Link>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Register;
