import React, { useState } from "react";
import "./LoginPage.css";
import logo from "../Assets/PERSISTENT.Logo.png";
const LoginPage = () => {
  const [name, setName] = useState("");
  const [companyname, setCompanyName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Email:", name);
    console.log("Password:", companyname);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login-page">
        <div className="login_header">
          <img src={logo} alt="Logo" className="logo" />
          <h2>
            <span className="persistent">Persistent</span>{" "}
            <span className="innovation">Innovation Portal</span>
          </h2>
        </div>

        <label className="login_name" htmlFor="Name">
          Name
        </label>
        <input
          type="text"
          id="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter your Name"
        />
        <label htmlFor="login_Company_name">Company Name</label>
        <input
          type="text"
          id="Company_name"
          value={companyname}
          onChange={(e) => setCompanyName(e.target.value)}
          required
          placeholder="Enter Company Name"
        />
        <button type="submit">SIGN IN</button>

        <div className="login_sso">
          <p>Sign in with your Persistent Account</p>
          <button type="button">Persistent Single Sign-On</button>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
