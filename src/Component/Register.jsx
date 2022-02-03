import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div>
      <h1>Patrick Conboy</h1>
      <h3 className="">REGISTRATION</h3>
      <p>
        Aloha, welcome to Hawai Action Services Create an account today and
        benefit with the best services.
      </p>
      <div className="">
        <label htmlFor="firstname">First Name</label>
        <input
          id="firstname"
          name="first_name"
          type="text"
          value={userInfo.first_name}
          onChange={handleInput}
          placeholder="Enter your first name"
          autoComplete="off"
        />
      </div>
      <div className="">
        <label htmlFor="lastname">Last Name</label>
        <input
          id="lastname"
          name="last_name"
          type="text"
          value={userInfo.last_name}
          onChange={handleInput}
          placeholder="Enter your last name"
          autoComplete="off"
        />
      </div>
      <div className="">
        <label htmlFor="business-name">Business Name</label>
        <input
          id="business-name"
          name="company_name"
          type="text"
          value={userInfo.company_name}
          onChange={handleInput}
          placeholder="Enter your last name"
          autoComplete="off"
        />
      </div>
      <div className="">
        <label htmlFor="emailid">Email Address</label>
        <input
          id="emailid"
          name="email"
          type="email"
          value={userInfo.email}
          onChange={handleInput}
          placeholder="Enter your email address"
          autoComplete="off"
        />
      </div>
      <div className="">
        <label htmlFor="phone-no">Phone Number</label>
        <input
          id="phone-no"
          name="phone"
          type="number"
          value={userInfo.phone}
          onChange={handleInput}
          placeholder="Enter your phone number"
          autoComplete="off"
        />
      </div>
      <div className="">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={userInfo.password}
          onChange={handleInput}
          placeholder="Enter your password"
        />
      </div>
      <div className="">
        <label htmlFor="country">Country</label>
        <input
          id="country"
          name="country"
          type="text"
          value={userInfo.country}
          onChange={handleInput}
          placeholder="Enter your password"
        />
      </div>
      <div className="">
        <label htmlFor="state">State</label>
        <input
          id="state"
          name="state"
          type="text"
          value={userInfo.state}
          onChange={handleInput}
          placeholder="Enter your password"
        />
      </div>
      <div className="">
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          type="text"
          value={userInfo.city}
          onChange={handleInput}
          placeholder="Enter your password"
        />
      </div>
      <div className="">
        <label htmlFor="address">Address</label>
        <input
          id="address"
          name="address1"
          type="text"
          value={userInfo.address1}
          onChange={handleInput}
          placeholder="Enter your password"
        />
      </div>
      <div className="">
        <label htmlFor="zip">Zip Code</label>
        <input
          id="zip"
          name="zip"
          type="number"
          value={userInfo.zip}
          onChange={handleInput}
          placeholder="Enter your password"
        />
      </div>
      <div className="">
        <button className="" onClick={handleSubit}>
          SUBMIT
        </button>
        <div className="">
          <p className="">Already have an account?</p>
          <Link to="/">
            <button className="">Login here</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
